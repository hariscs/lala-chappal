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
app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = [
    'http://localhost:3000',
    'http://lala-chappal.vercel.app',
    'https://lala-chappal.vercel.app',
  ]
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.header('Access-Control-Allow-credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, UPDATE')
  next()
})
// app.use(
//   cors({
//     origin: '*',
//   })
// )
// app.options('*', cors())
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
