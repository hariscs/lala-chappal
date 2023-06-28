import nodemailer from 'nodemailer'
import {
  EMAIL_PORT,
  HOST,
  NOREPLY,
  PASS,
  SECURE,
  SERVICE,
  USER,
} from '../../config'

export const mailer = async (email: string, subject: string, html: any) => {
  try {
    const transport = nodemailer.createTransport({
      host: HOST,
      service: SERVICE,
      port: Number(EMAIL_PORT),
      secure: Boolean(SECURE),
      auth: {
        user: USER,
        pass: PASS,
      },
    })

    await transport.sendMail({
      from: NOREPLY,
      to: email,
      subject: subject,
      html: html,
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const ADMIN_EMAIL = 'harisshah385@gmail.com'
