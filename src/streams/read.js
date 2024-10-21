import { log } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { stdout } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, "files", "fileToRead.txt");



const read = async () => {
    const fileStream = fs.createReadStream(fileToRead, "utf-8")
    

    fileStream.pipe(stdout)
    fileStream.on("error", (err)=>{
        log('FS operation failed', err)
    })
};

await read();