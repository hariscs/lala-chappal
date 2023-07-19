import { Request, Response } from 'express'
import { mailer } from '../utils/mailer'
import path from 'path'
import fs from 'fs'

const SUBJECT = 'Customer Enquiry'
const ADMIN_SUBJECT = 'New Customer Contact'
const ADMIN_EMAIL = 'harisshah385@gmail.com'

export const contact = async (req: Request, res: Response) => {
  console.log('request body', req.body)
  const { name, contact, email, message } = req.body

  let err: string

  if (!message) err = 'Message is required'
  if (!email) err = 'Email is required'
  if (!name) err = 'Name is required'
  if (!contact) err = 'Contact is required'

  if (err) {
    res.status(400).json({ error: err })
    return
  }
  res.status(200).json({ message: 'contact saved' })

  // read html template and update with dynamic content
  // const adminTemplate = path.join(
  //   __dirname,
  //   "..",
  //   "html",
  //   "contact-admin.html"
  // );
  // const userTemplate = path.join(__dirname, "..", "html", "contact-user.html");
  // const template = fs.readFileSync(adminTemplate, "utf8");

  // const userHtml = fs.readFileSync(userTemplate, "utf8");

  // const html = template
  //   .replace("{{name}}", name)
  //   .replace("{{contact}}", contact)
  //   .replace("{{email}}", email)
  //   .replace("{{message}}", message);

  // const adminEmailPromise = mailer(ADMIN_EMAIL, ADMIN_SUBJECT, html);
  // const userEmailPromise = mailer(email, SUBJECT, userHtml);

  // Promise.all([adminEmailPromise, userEmailPromise])
  //   .then(() => {
  //     console.log("Emails sent successfully");
  //     res.status(200).json({
  //       success: "Thanks for reaching out to us. You will hear from us shortly",
  //     });
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ error: "Internal server error" });
  //     console.log("Email sending failed", error);
  //   });
}
