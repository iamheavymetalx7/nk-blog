"use server";

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    // Process the webhook payload
    const payload = await req.json();
    // console.log("Webhook payload:", payload);

    // Fetch post ID and event type from the webhook payload
    const postId = payload.data.post.id;
    const eventType = payload.data.eventType;
    console.log(postId, eventType);
    revalidatePath("/posts");
    revalidatePath("/TIL");
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
