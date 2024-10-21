import { Worker } from "worker_threads";
import os from "os"
import { log } from "console";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, "worker.js");

const numCpu = os.cpus().length

const performCalculations = async () => {
    const workersPromises = []

    for(let i = 0; i < numCpu; i++){
        const worker = new Worker(workerPath)

        const workerPromise = new Promise((resolve, reject)=>{
            worker.on("message", (result)=>{
                resolve(result)
            })

            worker.on("error", (err)=>{
                reject(err)
            })
            worker.on("exit", (code)=>{
                if(code !== 0){
                    reject({ status: 'error', data: null })
                }
            })
        })
        worker.postMessage(10 + i)
        workersPromises.push(workerPromise)
       
    }
    const result = await Promise.allSettled(workersPromises)
    log(result)
};

await performCalculations();