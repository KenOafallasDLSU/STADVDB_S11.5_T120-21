//dependencies
const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')
//const mysql = require('mysql')

//creates express app
const app = express()
const port = 3000

//create hbs engine
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultView: 'main',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials')
}))

app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//database connection
const mysql = require('./mysql.js')
mysql.db.connect((err) => {
  if (err) throw err
  console.log("MySQL Connected")
})

//import routes
const home = require('./routes/homeRoutes.js')

//use routes
app.use('/', home)

//static hosting
app.use(express.static('public'))

//listener
app.listen(port, function() {
  console.log('App listening at port ' + port)
})