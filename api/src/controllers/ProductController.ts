import { Request, Response } from 'express'
import Product, { IProduct } from '../models/Product'

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { color, design, soleThickness, size } = req.body

    // Check if all parts are provided
    if (!color || !design || !soleThickness || !size) {
      return res.status(400).json({ message: 'All parts are required' })
    }

    // Create a new Chappal
    const product: IProduct = new Product({
      color,
      design,
      soleThickness,
      size,
    })

    // Save the Chappal to the database
    const savedProduct: IProduct = await product.save()
    res
      .status(200)
      .json({ message: 'Chappal created successfully', product: savedProduct })
  } catch (error) {
    console.error('Error creating Chappal:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
