import express, { Application } from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { loginUser, signup } from './controllers/UserController'
import mongoose from 'mongoose'
import { createProduct } from './controllers/ProductController'
import { contact } from './controllers/MailController'
import { dbLocal, dbURI } from '../config'
import { createChappal } from './controllers/ChappalController'
import { fetchOrders, updateOrderStatus } from './controllers/OrderController'
import { sendEmail } from './controllers/sendEmailController'
dotenv.config()
const app: Application = express()

app.use(cors({ origin: '*' }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.post('/signup', signup)
app.post('/login', loginUser)
app.post('/product', createProduct)
app.post('/chappal', createChappal)
app.get('/orders', fetchOrders)
app.put('/orders/update', updateOrderStatus) // Update order status
app.post('/send-email', sendEmail) // Update order status
app.post('/contact', contact)
app.get('/', (req, res) => {
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
