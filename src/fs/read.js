import { log } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, "files", "fileToRead.txt");



const read = async () => {
    await fs.promises.readFile(fileToRead, "utf-8").then(data=> log(data))
};

await read();