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
// const query11 = require('./routes/query11.js')
// const query12 = require('./routes/query12.js')
// const query21 = require('./routes/query21.js')
// const query22 = require('./routes/query22.js')
// const query31 = require('./routes/query31.js')
// const query32 = require('./routes/query32.js')
const query41 = require('./routes/query41Routes.js')

//use routes
app.use('/', home)
// app.use('/query11', query11)
// app.use('/query12', query12)
// app.use('/query21', query21)
// app.use('/query22', query22)
// app.use('/query31', query31)
// app.use('/query32', query32)
app.use('/query41', query41)

//static hosting
app.use(express.static('public'))

//listener
app.listen(port, function() {
  console.log('App listening at port ' + port)
})