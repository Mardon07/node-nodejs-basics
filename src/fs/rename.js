import { log } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const wrongFilename = path.join(__dirname, "files", "wrongFilename.txt");
const properFilename = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fs.promises.access(wrongFilename);
    try {
      await fs.promises.access(properFilename);
      throw new Error("Fs operation failed");
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw new Error("Fs operation failed");
      }
    }
    await fs.promises.rename(wrongFilename, properFilename);
    log("File renamed successfully!");
  } catch (error) {
    throw new Error("Fs operation failed");
  }
};

await rename();
