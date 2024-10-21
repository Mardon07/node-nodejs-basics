import { log } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = path.join(__dirname, "files");
const files_copy = path.join(__dirname, "files_copy");

const copy = async () => {
    try {
       await fs.promises.access(files_copy)
        throw new Error('File already exict')
    } catch (error) {
        if(error.code === "ENOENT"){
            try {
                await fs.promises.mkdir(files_copy)
                await fs.promises.cp(files, files_copy, {recursive: true})
            } catch (error) {
                log(error)
            }
           

        }else{
            log(error)
        }
    }
    
};

await copy();
