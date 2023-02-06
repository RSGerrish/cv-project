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
}, { timestamps: true })

module.exports = mongoose.model('CV', cvSchema)