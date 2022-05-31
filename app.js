const express = require('express')

const router = require.apply('./routes')
require('./config/mongoose')

const app = express()
const PORT = 3000

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})