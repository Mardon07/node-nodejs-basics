import crypto from 'crypto'
import { log } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCalculateHashFor = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
   const fileStream =  fs.createReadStream(fileToCalculateHashFor)

    const hash = crypto.createHash('sha256')
    fileStream.pipe(hash)

    hash.setEncoding("hex")
    fileStream.on("end", ()=>{
        hash.end()
        log(`SHA256 hash: ${hash.read()}`)

    })
    fileStream.on("error", (err)=>{
        log('FS operation failed', err)
    })

};

await calculateHash();