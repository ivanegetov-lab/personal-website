import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const subjectLine = subject
      ? `[Contact] ${subject} — from ${name}`
      : `[Contact] New message from ${name}`;

    await resend.emails.send({
      from: "Contact Form <contact@getov.xyz>",
      to: "ivanegetov@gmail.com",
      replyTo: email,
      subject: subjectLine,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#F97316;margin-bottom:4px;">New contact form message</h2>
          <p style="color:#666;margin-top:0;font-size:14px;">From your personal website</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:6px 0;color:#999;width:80px;">Name</td><td style="padding:6px 0;color:#111;">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#999;">Email</td><td style="padding:6px 0;color:#111;"><a href="mailto:${email}" style="color:#F97316;">${email}</a></td></tr>
            <tr><td style="padding:6px 0;color:#999;">Subject</td><td style="padding:6px 0;color:#111;">${subject || "—"}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
          <p style="font-size:14px;color:#111;line-height:1.7;white-space:pre-wrap;">${message}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
          <p style="font-size:12px;color:#999;">Hit reply to respond directly to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message sent." }, { status: 200 });
  } catch (err) {
    console.error("[Contact] Resend error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
