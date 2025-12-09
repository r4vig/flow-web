import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json() as {
      name: string;
      email: string;
      company?: string;
      phone?: string;
      service: string;
      message: string;
    };

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    });

    await resend.emails.send({
      from: "Flow Contact <onboarding@resend.dev>",
      to: "flowidg@hotmail.com",
      subject: `📩 New contact message from ${data.name}`,
      replyTo: data.email,
      html: `
      <div style="font-family:Arial, Helvetica, sans-serif; color:#112739; background:#f8fafc; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; padding:24px; border-radius:12px; border:1px solid #eee;">

          <h2 style="color:#0a2540; font-size:20px; margin-bottom:4px;">
            New Contact Message
          </h2>
          <p style="color:#e67e22; font-weight:600; margin:0;">
            FLOW — Human Flow for Digital Growth
          </p>

          <hr style="margin:16px 0; border:0; border-top:1px solid #eee;" />

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Service of interest:</strong> ${data.service}</p>

          <div style="margin-top:16px;">
            <p style="font-weight:bold; margin-bottom:6px;">Message:</p>
            <p style="white-space:pre-line; color:#112739;">${data.message}</p>
          </div>

          <hr style="margin:20px 0; border:0; border-top:1px solid #eee;" />

          <p style="font-size:12px; color:#5b738a;">
            <strong>Submitted on:</strong> ${submittedAt} (ET)
          </p>
        </div>
      </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error(error);
    const message = error instanceof Error ? error.message : "Unknown server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
