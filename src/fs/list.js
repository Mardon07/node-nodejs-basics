import { log } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = path.join(__dirname, "files");

const list = async () => {
    try {
       (await fs.promises.readdir(files)).forEach(file=> log(file))
    } catch (error) {
        log(error)
    }
};

await list();