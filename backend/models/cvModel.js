const mongoose = require('mongoose')  // Import mongoose so we can take advantage of a Schema to
                                        // to structure our data
const Schema = mongoose.Schema        // Set Schema as a mongoose schema object(is it an object?)

const cvSchema = new Schema({
  first: { type: String, required: false },
  last: { type: String, required: false },
  title: { type: String, required: false },
  profile: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  linkedIn: { type: String, required: false },
  gitHub: { type: String, required: false },
  website: { type: String, required: false },

  schoolName: { type: String, required: false },
  degree: { type: String, required: false },
  schoolLocation: { type: String, required: false },
  schFromMonth: { type: String, required: false },
  schFromYear: { type: String, required: false },
  schToMonth: { type: String, required: false },
  schToYear: { type: String, required: false },

  jobTitle: { type: String, required: false },
  companyName: { type: String, required: false },
  companyLocation: { type: String, required: false },
  expFromMonth: { type: String, required: false },
  expFromYear: { type: String, required: false },
  expToMonth: { type: String, required: false },
  expToYear: { type: String, required: false },
  expHighlights: { type: String, required: false }

}, { timestamps: true })

module.exports = mongoose.model('CV', cvSchema)