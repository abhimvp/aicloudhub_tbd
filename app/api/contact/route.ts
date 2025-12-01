import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      designation,
      category,
      requirements,
    } = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !designation || !category || !requirements) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const recipient =
      process.env.CONTACT_FORM_EMAIL || "info@aiCloudHub.com";

    const subject = `New Contact Inquiry from ${firstName} ${lastName}`;

    const body = `
New contact inquiry received from the aiCloudHub website.

Contact Details:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || "Not provided"}
- Designation: ${designation}
- Category: ${category}

Requirements / Message:
${requirements}

---
This message was submitted from the Contact Us page.
    `.trim();

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "noreply@aiCloudHub.com",
      to: recipient,
      subject,
      text: body,
    });

    if (error) {
      console.error("Resend contact form error:", error);
      return NextResponse.json(
        { error: "Failed to send contact email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error handling contact form:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


