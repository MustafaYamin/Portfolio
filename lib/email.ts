import emailjs from '@emailjs/browser'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// EmailJS configuration - Replace with your actual values
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_default'
}

// Initialize EmailJS at the top-level
emailjs.init(EMAILJS_CONFIG.publicKey)

export async function sendEmail(data: ContactFormData): Promise<boolean> {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: 'mustafayamin5@gmail.com',
      reply_to: data.email
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    return response.status === 200
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}