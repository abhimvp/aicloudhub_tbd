// app/api/course-inquiry/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, courseTitle } = body;

    // Validate required fields
    if (!name || !email || !company || !courseTitle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a production environment, you would integrate with an email service
    // like SendGrid, Resend, AWS SES, etc.
    // For now, this is a placeholder that logs the inquiry

    const emailContent = {
      to: "info@acloudhub.com",
      subject: `Corporate Training Inquiry: ${courseTitle}`,
      body: `
        New Corporate Training Inquiry
        
        Course: ${courseTitle}
        
        Contact Information:
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Phone: ${phone || "Not provided"}
        
        Additional Information:
        ${message || "No additional information provided"}
        
        ---
        This inquiry was submitted from the AICloudHub website.
      `,
    };

    // Log the inquiry (in production, send actual email)
    console.log("Course Inquiry Received:", emailContent);

    // TODO: Integrate with your email service provider
    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'noreply@aicloudhub.com',
    //   to: 'info@acloudhub.com',
    //   subject: emailContent.subject,
    //   text: emailContent.body,
    // });

    // For now, simulate success
    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
