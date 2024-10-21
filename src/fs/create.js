import { log } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const freshpath = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await fs.promises.access(freshpath);
    throw new Error("File already exict")
  } catch (error) {
    if(error.code === "ENOENT"){
        try {
            await fs.promises.writeFile(freshpath, "I am fresh and young")
        log('File created successfully')
        } catch (error) {
            log('File error', error)
        }
        

    }else{
        log(error)
    }
  }
};

await create();
