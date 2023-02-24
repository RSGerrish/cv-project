require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cvRoutes = require('./routes/cvs')
const userRoutes = require('./routes/user')
const healthRoutes = require('./routes/health')

// express app
const app = express()

// Middleware
app.use(express.json())

const whitelist = ['http://localhost:3000', 'https://cv-project-ten.vercel.app/']

app.use(
  cors({
    origin: 'https://cv-project-ten.vercel.app/'
  })
)

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes  
app.use('/api/cvs', cvRoutes)
app.use('/api/user', userRoutes)
app.use('/api/health', healthRoutes)

// Connect to DB

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  // Listen for requests
  app.listen(process.env.PORT, () => {
    console.log(`Connected to DB and listening on port ${process.env.PORT}`)
  })
})
.catch((error) => {
  console.log(error)
})