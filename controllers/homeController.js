const homeModel = require('../models/homeModel.js')

exports.renderHome = (req, res) => {
  res.render('home', {
    pageCSS: "homeCSS",
    pageJS: "homeJS",
    pageTitle: "Home",
    navbarTitle: "STADVDB Group 3 Query Application"
  })
}

exports.createDatabase = (req, res) => {
  homeModel.createDatabase((result) => {
    console.log(result)
    res.send(result)
  })
}