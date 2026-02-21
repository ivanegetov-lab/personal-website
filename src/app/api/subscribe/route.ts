import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // MVP: log to console. Swap this block for your email provider:
    // - Resend:      await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID })
    // - ConvertKit:  await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, ...)
    // - Mailchimp:   await mailchimp.lists.addListMember(LIST_ID, { email_address: email, status: "subscribed" })
    console.log(`[Newsletter] New subscriber: ${email}`);

    return NextResponse.json(
      { message: "Subscribed successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
