import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/hasnode"; // Adjust the import path
import { readJSONFile, writeJSONFile } from "@/lib/handleIncomingUpdates";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    console.log("Webhook payload:", payload);

    const postId = payload.data.post.id;
    console.log("Post ID:", postId);

    let data = await readJSONFile();
    console.log("Current data in JSON file:", data);

    const response = await query({
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

    console.log("GraphQL response:", response);

    // Correctly extract post from response.data
    const post = response.data.post;
    console.log("Post data:", post);

    data[postId] = post;
    console.log("Writing data to JSON file...");
    await writeJSONFile(data);
    console.log("Data written successfully.");

    return NextResponse.json({ message: "Webhook received and data updated" });
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
