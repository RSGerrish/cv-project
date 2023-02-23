const CV = require('../models/cvModel')
const mongoose = require('mongoose')

// Get all CVs
const getCVs = async (req, res) => {
  const user_id = req.user._id

  const cvs = await CV.find({ user_id }).sort({createdAt: -1}) // ex. CV.find({_id: xxx }) will find all records that have an ._id property of xxx PERHAPS USEFUL FOR UPDATING
  res.status(200).json(cvs)
}

// Get a single CV
const getCV = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Object ID is not valid, CV does not exist'})
  }

  const cv = await CV.findById(id)

  if(!cv) {
    return res.status(400).json({error: 'No such CV exists'})
  }

  res.status(200).json(cv)
}

// Create a new CV
const createCV = async (req, res) => {
  const {address, phone, email, title, name, profile, website, github, linkedin, experience, schools, skills, references} = req.body


  // Add document to DB
  try {
    const user_id = req.user._id
    const cv = await CV.create({address, phone, email, title, name, profile, website, github, linkedin, experience, schools, skills, references, user_id})
    res.status(200).json(cv)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Delete a CV
const deleteCV = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Object ID is not valid, unable to delete CV'})
  }

  const cv = await CV.findOneAndDelete({_id: id})

  if(!cv) {
    return res.status(400).json({error: 'No such CV exists, unable to delete CV'})
  }

  res.status(200).json(cv)
}

// Update a CV
const updateCV = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Object ID is not valid, unable to update CV'})
  }

  const cv = await CV.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if(!cv) {
    return res.status(400).json({error: 'No such CV exists, unable to update CV'})
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