import { log } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { stdin } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToWrite = path.join(__dirname, "files", "fileToWrite.txt");




const write = async () => {
   const fileStream = fs.createWriteStream(fileToWrite) 


   stdin.on("data", (data)=>{
    fileStream.write(data)
   })
};

await write();