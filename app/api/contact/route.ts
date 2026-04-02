import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Añadimos company y phone que vienen del formulario
    const { name, email, message, service, company, phone } = await req.json();

    const data = await resend.emails.send({
      from: 'Flow Contact <onboarding@resend.dev>',
      to: ['flowidg@proton.me'], // <-- Corregido: ProtonMail usa @pm.me o @proton.me
      subject: `New Lead: ${name} - ${service}`,
      html: `
        <div style="font-family: sans-serif; color: #112739; max-width: 600px;">
          <h2 style="color: #d17f32;">New message from Flow Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${service}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 8px; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}