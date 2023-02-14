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

  schoolName2: { type: String, required: false },
  degree2: { type: String, required: false },
  schoolLocation2: { type: String, required: false },
  schFromMonth2: { type: String, required: false },
  schFromYear2: { type: String, required: false },
  schToMonth2: { type: String, required: false },
  schToYear2: { type: String, required: false },

  jobTitle: { type: String, required: false },
  companyName: { type: String, required: false },
  companyLocation: { type: String, required: false },
  expFromMonth: { type: String, required: false },
  expFromYear: { type: String, required: false },
  expToMonth: { type: String, required: false },
  expToYear: { type: String, required: false },
  expHighlights: { type: String, required: false },

  jobTitle2: { type: String, required: false },
  companyName2: { type: String, required: false },
  companyLocation2: { type: String, required: false },
  expFromMonth2: { type: String, required: false },
  expFromYear2: { type: String, required: false },
  expToMonth2: { type: String, required: false },
  expToYear2: { type: String, required: false },
  expHighlights2: { type: String, required: false },

  jobTitle3: { type: String, required: false },
  companyName3: { type: String, required: false },
  companyLocation3: { type: String, required: false },
  expFromMonth3: { type: String, required: false },
  expFromYear3: { type: String, required: false },
  expToMonth3: { type: String, required: false },
  expToYear3: { type: String, required: false },
  expHighlights3: { type: String, required: false },

  jobTitle4: { type: String, required: false },
  companyName4: { type: String, required: false },
  companyLocation4: { type: String, required: false },
  expFromMonth4: { type: String, required: false },
  expFromYear4: { type: String, required: false },
  expToMonth4: { type: String, required: false },
  expToYear4: { type: String, required: false },
  expHighlights4: { type: String, required: false }
}, { timestamps: true })

module.exports = mongoose.model('CV', cvSchema)