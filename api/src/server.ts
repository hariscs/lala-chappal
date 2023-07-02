import express, { Application } from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { loginUser, signup } from './controllers/UserController'
import mongoose from 'mongoose'
import { createProduct } from './controllers/ProductController'
import { contact } from './controllers/MailController'
import { dbLocal, dbURI } from '../config'
dotenv.config()
const app: Application = express()

// Allow requests from specific origins
const allowedOrigins = [
  'https://lala-chappal.vercel.app',
  'http://localhost:3000',
]

app.use(
  cors({
    origin: '*',
  })
)
app.options('*', cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.post('/signup', signup)
app.post('/login', loginUser)
app.post('/product', createProduct)
app.post('/contact', contact)
app.get('/', (req, res) => {
  res.status(200)
  res.json({ message: 'REST API for lala Chappal' })
})

const PORT = 8080
// db connection
mongoose.set('strictQuery', false)
mongoose
  // .connect(dbLocal)
  .connect(dbURI)
  .then(() =>
    app.listen(PORT, () => {
      console.log('db connected & app running on port', PORT)
    })
  )
  .catch((err) => console.log(err))
// app.listen(PORT, () => {
//   console.log('app running on port', PORT)
// })
