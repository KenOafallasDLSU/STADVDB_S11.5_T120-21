const query22Model = require('../models/query22Model');

exports.getQuery22 = (req, res) => {
  res.render('query22', {
    navbarTitle: "Query 2-2",
    pageTitle: "Query 2-2",
    pageJS: "query22JS",
    pageCSS: "query22CSS",
    results: [{
      loan_ID: 'N/A',
      date: 'N/A',
      amount: 'N/A',
      status: 'N/A',
      remaining: 'N/A'
    }]

  });
};

exports.postQuery22 = (req, res) => {
  let accountID = req.body.accountID;

  query22Model.query22(accountID, (results, err) => {
    console.log(results);
    res.send(results);
  })
};