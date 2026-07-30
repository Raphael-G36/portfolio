import { NextRequest, NextResponse } from 'next/server'
import { site } from '@/data/site'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const mailBody = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    const mailto = `mailto:${site.email}?subject=${subject}&body=${mailBody}`

    console.log('Contact form submission:', { name, email, message })

    return NextResponse.json(
      {
        message: 'Ready to send',
        mailto,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to prepare message. Please try again later.' },
      { status: 500 }
    )
  }
}
