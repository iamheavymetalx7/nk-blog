import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/hasnode"; // Adjust the import path
import { readJSONFile, writeJSONFile } from "@/lib/handleIncomingUpdates";

export async function POST(req: NextRequest) {
  try {
    // Process the webhook payload
    const payload = await req.json();
    console.log("Webhook payload:", payload);

    // Fetch post ID and event type from the webhook payload
    const postId = payload.data.post.id;
    const eventType = payload.data.eventType;

    // Read existing data from JSON file
    let data = await readJSONFile();
    console.log("Current data in JSON file:", data);

    if (eventType === "post_deleted") {
      // Check if the post ID exists in the data
      if (data[postId]) {
        // Remove the post data
        delete data[postId];

        // Write updated data to JSON file
        console.log("Writing data to JSON file...");
        await writeJSONFile(data);
        console.log("Data written successfully.");

        // Send a response to acknowledge receipt
        return NextResponse.json({ message: "Post deleted and data updated" });
      } else {
        // Post ID does not exist, send an appropriate response
        return NextResponse.json(
          { message: "Post not found in the data" },
          { status: 404 }
        );
      }
    } else {
      // Unsupported event type
      return NextResponse.json(
        { message: "Unsupported event type" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
