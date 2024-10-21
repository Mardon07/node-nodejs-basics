import zlib from "zlib"
import { log } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { stdout } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCompress = path.join(__dirname, "files", "fileToCompress.txt");
const fileToGzip = path.join(__dirname, "files", "fileToCompress.txt.gz");



const decompress = async () => {
   const input = fs.createReadStream(fileToGzip)
   const output = fs.createWriteStream(fileToCompress)

   const text = zlib.createGunzip()

   input.pipe(text).pipe(output)

   output.on("finish", ()=>{
    log("File created succesfully")
   })

};

await decompress();