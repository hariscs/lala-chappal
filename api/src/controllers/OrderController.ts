// controllers/OrderController.ts

import { Request, Response } from 'express'
import Order, { IOrder } from '../models/Order'

export const fetchOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate('products').exec()
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' })
  }
}

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { orderId, status } = req.body // Get orderId and status from the request body

    // Find the order by ID and update its status
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    )

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' })
    }

    // Fetch all orders again to send the updated list
    const orders = await Order.find().populate('products').exec()

    res.json({ message: 'Order status updated successfully', orders })
  } catch (error) {
    res.status(500).json({ message: 'Error updating order status' })
  }
}
