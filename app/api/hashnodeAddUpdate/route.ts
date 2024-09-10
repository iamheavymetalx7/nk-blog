"use server";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    // console.log("Webhook payload:", payload);

    const postId = payload.data.post.id;
    // console.log("Post ID:", postId);

    revalidatePath("/posts");
    revalidatePath("/TIL");

    return NextResponse.json({ message: "Webhook received and data updated" });
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
