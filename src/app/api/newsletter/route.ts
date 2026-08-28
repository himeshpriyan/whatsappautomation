import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// TODO: connect to real email marketing platform (e.g. Mailchimp/ConvertKit/Resend) before launch
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const subscriber = {
      email: email.trim().toLowerCase(),
      subscribedAt: new Date().toISOString(),
    };

    console.log("[Zechsoft Newsletter API] New Subscriber:", subscriber);

    // Save subscriber locally for audit/backup
    try {
      const dataDir = path.join(process.cwd(), "src", "data");
      const filePath = path.join(dataDir, "newsletter_subscribers.json");
      let subscribers: unknown[] = [];
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf-8");
        subscribers = JSON.parse(fileData);
      }
      subscribers.push(subscriber);
      fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));
    } catch (fsErr) {
      console.warn("[Zechsoft Newsletter API] Could not write to local log file:", fsErr);
    }

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to Zechsoft Growth Weekly!",
    });
  } catch (error) {
    console.error("[Zechsoft Newsletter API Error]:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
