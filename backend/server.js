require('dotenv').config()

const express = require('express')          // Middleware
const mongoose = require('mongoose')        // Allows for structured Schemas and Models
const cvRoutes = require('./routes/cvs')    // Route functions stored in cvs.js for structure and readability

// Store express app inside 'app' variable
const app = express()

//middleware
app.use(express.json())   // For each request that gets passed to the server, look to see if it has
                          // a body (or data) attached to it and if it does, attach it to express so 
                          // it can be used in the req handler (example. req.body)
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes - imported from ./routes/cvs.js
  // argument '/api/cvs' says when a request is fired into our server at location '/api/cvs' 
  // then use the routes stored in cvRoutes
app.use('/api/cvs', cvRoutes)

// Set mongoose strictQuery to true as it will be set to false with mongoose 7
mongoose.set('strictQuery', true);        
// Connect to db with mongoose
mongoose.connect(process.env.MONGO_URI)
.then(() => {         
  console.log('connected to database')                    // Once we are connected...
  app.listen(process.env.PORT, () => {      // listen for requests
    console.log(`listening for requests on port ${process.env.PORT}...`)
  })
})
.catch((err) => {                       // If we run into an error
  console.log(err)                        // log the error message
})