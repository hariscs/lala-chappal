import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config'
import User, { IUser } from '../models/User'

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body

    // Check if user already exists
    const existingUser: IUser | null = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' })
    }

    // Hash the password
    const hashedPassword: string = await bcrypt.hash(password, 10)

    // Create a new user
    const user: IUser = new User({
      name,
      email,
      password: hashedPassword,
    })

    // Save the user to the database
    const savedUser: IUser = await user.save()

    // Generate JWT token
    const token: string = jwt.sign(
      { userId: savedUser._id },
      config.jwtSecret,
      { expiresIn: '1h' }
    )

    res.status(201).json({ token })
  } catch (error) {
    console.error('Error in signup:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
