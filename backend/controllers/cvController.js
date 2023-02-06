const CV = require('../models/cvModel')
const mongoose = require('mongoose')

// Get all CVs
const getCVs = async (req, res) => {
  const cvs = await CV.find({}).sort({createdAt: -1}) // Look for all CV records (blank object in find({})) 
                                                        // and sort them in descending order from when they were created
  res.status(200).json(cvs)  // Send a good status of 200 and return all cv records formatted in JSON
}

// Get a single CV
const getCV = async (req, res) => {
  const { id } = req.params           // Destructure CV id from the req parameters

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such CV ID available!'})
  }

  const cv = await CV.findById(id)    // Set cv equal to whatever object is available at the provided ID
  if (!cv) {                          // If we did not end up with a populated object, then
    return res.status(400).json({error: 'No such workout'})   // Return a bad status and error message and exit func
  }

  res.status(200).json(cv)            // If we did not have to send a bad status, then send a good one
}

// Create a new CV and save it to the DB
const createCV = async (req, res) => {
  const {first, last, title, profile, email, phone, linkedIn, gitHub, website} = req.body // Destructure body of req into vars

  try {
    console.log('trying....')
    const cv = await CV.create({first, last, title, profile, email, phone, linkedIn, gitHub, website}) // Create a new document with these 8 properties and save in DB
    console.log('success!')
    res.status(200).json(cv)  // After the new document is created, respond with a good status of 200 and the new document formatted in JSON
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Delete a CV
const deleteCV = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such CV ID available!'})
  }

  const cv = await CV.findOneAndDelete({_id: id})

  if (!cv) {                          // If we did not end up with a populated object to delete, then
    return res.status(400).json({error: 'No such CV available'})   // Return a bad status and error message and exit func
  }

  res.status(200).json(cv)
}

// Update a CV
const updateCV = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such CV ID available!'})
  }
  
  const cv = await CV.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!cv) {                          // If we did not end up with a populated object to delete, then
    return res.status(400).json({error: 'No such CV available'})   // Return a bad status and error message and exit func
  }

  res.status(200).json(cv)
}


module.exports = {
  getCVs,
  getCV,
  createCV,
  deleteCV,
  updateCV
}