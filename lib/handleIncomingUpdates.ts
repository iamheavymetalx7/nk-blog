import fs from "fs";
import path from "path";

const jsonFilePath = path.join(process.cwd(), "data.json");
console.log(jsonFilePath);
export async function readJSONFile() {
  try {
    if (fs.existsSync(jsonFilePath)) {
      const data = fs.readFileSync(jsonFilePath, "utf-8");
      return JSON.parse(data);
    }
    return {};
  } catch (error) {
    console.error("Error reading JSON file:", error);
    throw error;
  }
}

export async function writeJSONFile(data: any) {
  try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing JSON file:", error);
    throw error;
  }
}
