import zlib from "zlib"
import { log } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCompress = path.join(__dirname, "files", "fileToCompress.txt");
const fileToGzip = path.join(__dirname, "files", "fileToCompress.txt.gz");




const compress = async () => {
   const input = fs.createReadStream(fileToCompress)
   const output = fs.createWriteStream(fileToGzip)

   const gzip = zlib.createGzip()
   
   input.pipe(gzip).pipe(output)

   output.on("finish", ()=>{
    log("File created succesfully")
   })

};

await compress();