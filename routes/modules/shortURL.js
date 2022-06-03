const express = require('express')
const router = express.Router()
const shortenURL = require('../../shorten-url.js')

const URL = require('../../models/url')

// get POST from index.hbs
router.post('/', (req, res) => {
  const rawURL = req.body.rawURL
  const host = req.headers.host

  // find if there is a rawURL in the database
  URL.findOne({ rawURL }, (error, urlObj) => {
    if (error) res.render('error')

    if (urlObj) {
      res.render('shortURL', { shortURL: urlObj.shortURL })
    } else {
      // If data is not in database, create new data
      // shorten one and create new data
      // As data is created, render shortURL.hbs
      const shortURL = shortenURL(6, host)
      URL.create({ rawURL, shortURL }).then(() => {
        res.render('shortURL', { shortURL })
      })
    }
  })
})

module.exports = router
