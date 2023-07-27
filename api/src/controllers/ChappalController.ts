import { Request, Response } from 'express'
import Chappal, { IChappal } from '../models/Chappal'
import path from 'path'
import fs from 'fs'
import { emailSubjects } from '../utils/types/email-subjects'
import { ADMIN_EMAIL, mailer } from '../utils/mailer'

export const createChappal = async (req: Request, res: Response) => {
  try {
    const {
      design,
      size,
      email,
      payment,
      name,
      phone,
      address,
      productName,
      cost,
      quantity,
    } = req.body

    // Check if all parts are provided
    if (!quantity || !design || !size) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Create a new Chappal
    const chappal: IChappal = new Chappal({
      quantity,
      design,
      size,
      cost,
    })

    // Save the Chappal to the database
    const savedChappal: IChappal = await chappal.save()
    res
      .status(200)
      .json({ message: 'Chappal created successfully', chappal: savedChappal })

    const userTemplate = path.join(
      __dirname,
      '..',
      'html',
      'user-purchase.html'
    )

    const adminTemplate = path.join(
      __dirname,
      '..',
      'html',
      'admin-purchase-confirm.html'
    )

    const userTemp = fs.readFileSync(userTemplate, 'utf8')
    const adminUtf = fs.readFileSync(adminTemplate, 'utf8')

    const html = userTemp.replace('{{customer_name}}', name)

    const adminHtml = adminUtf
      .replace('{{customer_email}}', email)
      .replace('{{customer_name}}', name)
      .replace('{{customer_phone}}', phone)
      .replace('{{customer_address}}', address)
      .replace('{{payment}}', payment)
      .replace('{{product_name}}', productName)
      .replace('{{quantity}}', quantity)
      .replace('{{cost}}', cost)
      .replace('{{design}}', design)
      .replace('{{size}}', size)

    const userEmailPurchasePromise = mailer(
      email,
      emailSubjects.USER_PURCHASE,
      html
    )

    const adminPuchaseConfirmPromise = mailer(
      ADMIN_EMAIL,
      emailSubjects.USER_PURCHASE_ADMIN_CONFIRM,
      adminHtml
    )

    Promise.all([userEmailPurchasePromise, adminPuchaseConfirmPromise])
      .then(() => {
        console.log('Emails sent successfully')
      })
      .catch((error) => {
        console.log('Email sending failed', error)
      })
  } catch (error) {
    console.error('Error creating Chappal:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
