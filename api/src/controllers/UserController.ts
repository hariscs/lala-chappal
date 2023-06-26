import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User, { IUser } from '../models/User'
import { jwtSecret } from '../../config'

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
    const token: string = jwt.sign({ userId: savedUser._id }, jwtSecret, {
      expiresIn: '30d',
    })

    res.status(201).json({ token })
  } catch (error) {
    console.error('Error in signup:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    // Find the user by email
    const user: IUser | null = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' })
    }

    // Successful login
    // Generate JWT token
    const token: string = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: '30d',
    })

    return res.status(200).json({ message: 'Login successful', token })
  } catch (error) {
    console.error('Error during login:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
