const express = require('express')
const router = express.Router()
const shortenURL = require('../../shorten-url.js')

const URL = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

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
      const short = shortenURL(6)
      const shortURL = `http://${host}/${short}`
      URL.create({ rawURL, shortURL }).then(() => {
        res.render('shortURL', { rawURL, shortURL })
      })
    }
  })
})

router.get('/:shortURL', (req, res) => {
  const short = req.params.shortURL
  const host = req.headers.host
  const shortURL = `http://${host}/${short}`

  URL.findOne({ shortURL }, (error, urlObj) => {
    if (error) res.render('error')

    if (urlObj) {
      res.redirect(urlObj.rawURL)
    }
  })
})

module.exports = router
