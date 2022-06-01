const express = require('express')
const router = express.Router()

const home = require('./modules/home')
router.use('/', home)

const shortURL = require('./modules/shortURL')
router.use('/shortURL', shortURL)

module.exports = router