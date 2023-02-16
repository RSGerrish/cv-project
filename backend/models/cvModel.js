const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cvSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: false
  },
  website: {
    type: String,
    required: false
  },
  github: {
    type: String,
    required: false
  },
  linkedin: {
    type: String,
    required: false
  },
  experience: {
    type: Array,
    required: false
  },
  schools: {
    type: Array,
    required: false
  },
  skills: {
    type: Array,
    required: false
  },
  references: {
    type: Array,
    required: false
  }
}, [{ timestamps: true }])

module.exports = mongoose.model(`CV`, cvSchema)