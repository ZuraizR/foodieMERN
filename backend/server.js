import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// add config
const app = express()
const PORT = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors({
  origin: ["https://foodie-mern-frontend.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}))

// MongoDB Connection
try {
  connectDB()
} catch (error) {
  throw new Error(error)
}

// api endpoints
app.use('/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/user', userRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)

app.get('/', (req, res) => {
  res.send('Hello from backend')
})

// listen server on PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

// mongodb+srv://devzuraiz:devzuraiz@cluster0.hieloll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
