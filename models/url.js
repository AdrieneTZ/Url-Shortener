const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  rawURL: {
    type: String,
    required: true
  },
  shortURL: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Url', urlSchema)
