import { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/lib/hasnode"; // Adjust the import path
import { readJSONFile, writeJSONFile } from "@/lib/handleIncomingUpdates";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Process the webhook payload
      const payload = req.body;
      console.log("Webhook payload:", payload);

      // Fetch post ID and event type from the webhook payload
      const postId = payload.data.post.id;
      const eventType = payload.data.eventType;

      // Read existing data from JSON file
      let data = await readJSONFile();

      if (eventType === "post_deleted") {
        // Check if the post ID exists in the data
        if (data[postId]) {
          // Remove the post data
          delete data[postId];

          // Write updated data to JSON file
          await writeJSONFile(data);

          // Send a response to acknowledge receipt
          res.status(200).json({ message: "Post deleted and data updated" });
        } else {
          // Post ID does not exist, send an appropriate response
          res.status(404).json({ message: "Post not found in the data" });
        }
      } else {
        res.status(400).json({ message: "Unsupported event type" });
      }
    } catch (error) {
      console.error("Error handling webhook:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
