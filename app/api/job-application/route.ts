// app/api/job-application/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("coverLetter") as string;
    const linkedin = formData.get("linkedin") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const jobId = formData.get("jobId") as string;
    const resume = formData.get("resume") as File;

    // Validate required fields
    if (!name || !email || !jobTitle || !resume) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate file type
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const validExtensions = [".pdf", ".doc", ".docx"];
    const fileExtension = resume.name
      .substring(resume.name.lastIndexOf("."))
      .toLowerCase();

    if (
      !validTypes.includes(resume.type) &&
      !validExtensions.includes(fileExtension)
    ) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload PDF, DOC, or DOCX." },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size must be less than 5MB" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Determine recipient email (prioritize env var for testing/production control)
    const recipientEmail =
      process.env.JOB_APPLICATION_EMAIL || "info@acloudhub.com";

    // Prepare email content
    const emailSubject = `Job Application: ${jobTitle}`;
    const emailBody = `
New Job Application Received

Job Details:
- Position: ${jobTitle}
- Job ID: ${jobId}

Applicant Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || "Not provided"}
- LinkedIn: ${linkedin || "Not provided"}

${message ? `Cover Letter/Message:\n${message}\n` : ""}

---
This application was submitted from the aiCloudHub careers page.
    `.trim();

    // Send email with attachment
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "noreply@aiCloudHub.com",
      to: recipientEmail,
      subject: emailSubject,
      text: emailBody,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send application email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        emailId: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing job application:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

