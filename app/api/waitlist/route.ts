import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || ''

export async function POST(req: Request) {
  try {
    const { full_name, email } = await req.json()

    if (AUDIENCE_ID) {
      await resend.contacts.create({
        email: email,
        firstName: full_name.split(' ')[0],
        lastName: full_name.split(' ').slice(1).join(' '),
        unsubscribed: false,
        audienceId: AUDIENCE_ID,
      })
    }

    const data = await resend.emails.send({
      from: 'PayBoost Waitlist <onboarding@resend.dev>',
      to: [process.env.SUPPORT_EMAIL || 'notify@contacts.keilapay.com'],
      replyTo: email,
      subject: '🚀 New PayBoost Waitlist Entry!',
      html: `
        <div style="font-family: sans-serif; padding: 40px; background-color: #01202F; color: white; border-radius: 20px;">
          <h2 style="color: #00C820;">New Interest in PayBoost!</h2>
          <p style="font-size: 16px;">Someone just joined the waitlist for the new version.</p>
          <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-top: 20px;">
            <p><strong>Name:</strong> ${full_name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #888;">PayBoost Internal Notification</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('Resend API Error:', err)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    )
  }
}
