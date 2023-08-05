import { Request, Response } from 'express'
import path from 'path'
import fs from 'fs'
import { emailSubjects } from '../utils/types/email-subjects'
import { mailer } from '../utils/mailer'
import Order from '../models/Order'

// Controller to send email
export const sendEmail = async (req: Request, res: Response) => {
  try {
    const { email, orderId } = req.body

    // Fetch order details
    const order = await Order.findById(orderId).populate('products').exec()
    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }

    // Prepare email template for customer
    const customerEmailTemplate = fs.readFileSync(
      path.join(__dirname, '..', 'html', 'order-shipped-customer.html'),
      'utf8'
    )

    const customerEmailHtml = customerEmailTemplate.replace(
      '{{customer_name}}',
      order.products[0].customer
    )

    // Send email to customer
    await mailer(email, emailSubjects.ORDER_SHIPPED_CUSTOMER, customerEmailHtml)

    res.json({ message: 'Email sent to customer' })
  } catch (error) {
    console.error('Error sending email to customer:', error)
    res.status(500).json({ message: 'Error sending email to customer' })
  }
}
