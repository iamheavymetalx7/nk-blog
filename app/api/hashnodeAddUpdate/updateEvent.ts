import { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/lib/hasnode"; // Adjust the import path
import { readJSONFile, writeJSONFile } from "@/lib/handleIncomingUpdates";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const payload = req.body;
      console.log("Webhook payload:", payload);

      const postId = payload.data.post.id;

      let data = await readJSONFile();

      const { post } = await query({
        query: `
        query($id: ID!) {
          post(id: $id) {
            id
            publishedAt
            title
            readTimeInMinutes
            url            
            slug
            author {
              name
            }
            tags {
              name
              slug
            }
            content {
              html
            }
          }
        }
        `,
        variables: {
          id: postId,
        },
      });

      data[postId] = post;

      await writeJSONFile(data);

      res.status(200).json({ message: "Webhook received and data updated" });
    } catch (error) {
      console.error("Error handling webhook:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
