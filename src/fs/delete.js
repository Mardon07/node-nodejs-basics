import { log } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRemove = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
    try {
        await fs.promises.access(fileToRemove)
        await fs.promises.unlink(fileToRemove)
        log(`fileToRemove has been deleted successfully.`)
    } catch (error) {
        if (error.code === "ENOENT") {
            throw new Error("Fs operation failed");
          }else{
            log(error)
          }
        
    }
};

await remove();