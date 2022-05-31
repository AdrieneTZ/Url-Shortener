require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(precess.env.MONGODB_URI, { uesNewUrlParser: true }, { useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', () => {
  console.log('Error connecting to MongoDB')
})

db.once('open', () => {
  console.log('Connected to MongoDB')
})

module.exports = db