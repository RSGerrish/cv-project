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

const allowedOrigins = ['https://cv-project-ten.vercel.app', 'http://localhost:3000']

app.use(
  cors(
    // origin: 'https://cv-project-ten.vercel.app',

    // origin: function(origin, callback) {
    //   // allow requests with no orign (like mobile apps or curl requests)
    //   if (!origin) return callback(null, true);
    //   if (allowedOrigins.indexOf(origin) === -1) {
    //     return callback(new Error('The CORS policy for this site does not allow access from the specified origin'), false)
    //   }

    //   return callback (null, true);
    // }
  )
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