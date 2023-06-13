import { Request, Response } from 'express'
import nodemailer from 'nodemailer'
import { mailer } from '../utils/mailer'
import path from 'path'
import fs from 'fs'

const SUBJECT = 'Customer Enquiry'
const ADMIN_SUBJECT = 'New Customer Contact'
const ADMIN_EMAIL = 'harisshah385@gmail.com'

export const contact = async (req: Request, res: Response) => {
  const { message, email, name, contact } = req.body

  console.log({ message, email, name, contact })

  let err: string

  if (!message) return (err = 'Message is required')
  if (!email) return (err = 'Email is required')

  if (err) {
    res.status(400).json({ error: err })
  }

  // read html template and update with dynamic content
  const adminTemplate = path.join(__dirname, '..', 'html', 'contact-admin.html')
  const userTemplate = path.join(__dirname, '..', 'html', 'contact-user.html')
  const template = fs.readFileSync(adminTemplate, 'utf8')

  const userHtml = fs.readFileSync(userTemplate, 'utf8')

  const html = template
    .replace('{{name}}', name)
    .replace('{{contact}}', contact)
    .replace('{{email}}', email)
    .replace('{{message}}', message)

  const adminEmailPromise = mailer(ADMIN_EMAIL, ADMIN_SUBJECT, html)
  const userEmailPromise = mailer(email, SUBJECT, userHtml)

  Promise.all([adminEmailPromise, userEmailPromise])
    .then(() => {
      console.log('Emails sent successfully')
      res.status(200).json({
        success: 'Thanks for reaching out to us. You will hear from us shortly',
      })
    })
    .catch((error) => {
      console.log('Email sending failed', error)
    })
}
