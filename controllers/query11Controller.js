const query11Model = require('../models/query11Model.js')

exports.renderMain = (req, res) => {
  res.render('query11', {
    pageCSS: "query11CSS",
    pageJS: "query11JS",
    pageTitle: "Query 1-1",
    navbarTitle: "Query 1-1",
    results: [
      {
        account_id: 1,
        trans: 'PRIJEM',
        start_date: 'wow',
        end_date: 'zers'
      }
    ]
  })
}

exports.postQuery11 = (req, res) => {
  let accountID = req.body.accountID;
  let startDate = req.body.startDate;
  let endDate = req.body.endDate;

  query11Model.query11(accountID, startDate, endDate, (result) => {
    console.log(result)
    res.send(result)
  })
}