import express, { Application } from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { loginUser, signup } from './controllers/UserController'
import mongoose from 'mongoose'
import { createProduct } from './controllers/ProductController'
dotenv.config()
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.post('/signup', signup)
app.post('/login', loginUser)
app.post('/product', createProduct)
app.get('/', (req, res) => {
  res.status(200)
  res.json({ message: 'REST API for lala Chappal' })
})

const PORT = 8080
// db connection
mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.dbURILocal)
  .then(() =>
    app.listen(PORT, () => {
      console.log('db connected & app running on port', PORT)
    })
  )
  .catch((err) => console.log(err))
// app.listen(PORT, () => {
//   console.log('db connected & app running on port', PORT)
// })
