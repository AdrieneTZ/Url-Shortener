const express = require('express')
const router = express.Router()
const shortenURL = require('../../shorten-url.js')

const URL = require('../../models/url')

// get POST from index.hbs
router.post('/', (req, res) => {
  const rawURL = req.body.rawURL
  console.log(rawURL)

  const shortURL = shortenURL(rawURL)
  res.render('shortURL', { shortURL })
})

module.exports = router
