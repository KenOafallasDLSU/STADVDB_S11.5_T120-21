const query41Model = require('../models/query41Model.js')

exports.renderMain = (req, res) => {
  res.render('query41', {
    pageCSS: "query41CSS",
    pageJS: "query41JS",
    pageTitle: "Query 4-1",
    navbarTitle: "Query 4-1"
  })
}