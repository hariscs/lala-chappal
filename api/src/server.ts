import express, { Application } from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { signup } from './controllers/UserController'
import mongoose from 'mongoose'
dotenv.config()
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.post('/signup', signup)
app.get('/', (req, res) => {
  res.status(200)
  res.json({ message: 'hello' })
})

const PORT = 8080
// db connection
mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.dbURI)
  .then(() =>
    app.listen(PORT, () => {
      console.log('db connected & app running on port', PORT)
    })
  )
  .catch((err) => console.log(err))
