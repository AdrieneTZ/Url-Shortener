const express = require('express')
const router = express.Router()
const shortenURL = require('../../shorten-url.js')

const URL = require('../../models/url')

// get POST from index.hbs
router.post('/', (req, res) => {
  const host = req.headers.host
  const { rawURL } = req.body

  URL.findOne({ rawURL }, (err, urlObj) => {
    if (err) res.send('Network Problem')

    if (urlObj) {
      // If data is in database, render shortURL.hbs
      res.render('shortURL', { shortURL: urlObj.shortURL })
    } else {
      const shortURL = shortenURL(6, host)
      // If data is not in database, create new data
      URL.create({
        rawURL,
        shortURL
      }).then(() => {
        // As data is created, render shortURL.hbs
        res.render('shortURL', { shortURL })
      })
    }
  })
})

module.exports = router
