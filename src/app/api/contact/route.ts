import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// TODO: connect to real email/CRM before production launch
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, inquiryType, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Full name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, error: "A valid WhatsApp/phone number is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Please provide a brief message describing your requirements." },
        { status: 400 }
      );
    }

    const submission = {
      id: "sub_" + Date.now(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: (company || "").trim(),
      inquiryType: inquiryType || "General Inquiry",
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    console.log("[Zechsoft Contact API] New Submission Received:", submission);

    // Save submission locally for audit/backup
    try {
      const dataDir = path.join(process.cwd(), "src", "data");
      const filePath = path.join(dataDir, "contact_submissions.json");
      let submissions: unknown[] = [];
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf-8");
        submissions = JSON.parse(fileData);
      }
      submissions.push(submission);
      fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
    } catch (fsErr) {
      console.warn("[Zechsoft Contact API] Could not write to local log file:", fsErr);
    }

    // If Resend or CRM API key is configured in env, send email notification
    if (process.env.RESEND_API_KEY) {
      // Example Resend integration placeholder
      console.log("[Zechsoft Contact API] Sending email notification via Resend...");
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received. Our specialist will contact you shortly.",
      submissionId: submission.id,
    });
  } catch (error) {
    console.error("[Zechsoft Contact API Error]:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
