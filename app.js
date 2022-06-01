const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')


const routes = require('./routes')
require('./config/mongoose')

const app = express()
const PORT = 3000


app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})