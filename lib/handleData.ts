// lib/handleData.ts
import fs from "fs";
import path from "path";

// Define the path to your data.json file
const dataFilePath = path.join(process.cwd(), "data.json");
// console.log(dataFilePath);
// Read and parse the data from data.json
export async function readJSONFile() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      console.log("File does not exist. Returning empty object.");
      return {};
    }
    const fileContent = fs.readFileSync(dataFilePath, "utf-8");
    // console.log("Read file content:", fileContent);
    return fileContent ? JSON.parse(fileContent) : {};
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return {};
  }
}
