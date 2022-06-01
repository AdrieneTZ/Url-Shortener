const mongoose = require('mongoose')
const Schema = mongoose.Schema


const urlSchema = new Schema({
  rawUrl: {
    type: String,
    required: true
  },
  shortenUrl: {
    type: String,
    required: true
  }
})

// export schema and named it 'Todo'
module.exports = mongoose.model('Url', urlSchema)