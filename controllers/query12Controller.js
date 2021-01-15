const query12Model = require('../models/query12Model.js')

exports.renderMain = (req, res) => {
  res.render('query12', {
    pageCSS: "query12CSS",
    pageJS: "query12JS",
    pageTitle: "Query 1-2",
    navbarTitle: "Characterization Summary of Transactions",
    charTypeList: [
      {
        val: 'insurance_payment',
        type: 'Insurance Payment'
      },
      {
        val: 'payment_on_statement',
        type: 'Payment on Statement',
      },
      {
        val: 'interest_credit',
        type: 'Interest Credited'
      },
      {
        val: 'sanction_interest',
        type: 'Sanction Interest'
      },
      {
        val: 'household',
        type: 'Household Payment'
      },
      {
        val: 'retirement_pension',
        type: 'Retirement Pension'
      },
      {
        val: 'loan',
        type: 'Loan Payment'
      },
      {
        val: 'misc_payment',
        type: 'Misc. Payment'
      },
      {
        val: 'misc_credit',
        type: 'Misc. Credit'
      }
    ],
    results: []
  })
}

exports.postQuery12 = (req, res) => {
  let k_symbol = req.body.k_symbol
  let startDate = req.body.startDate;
  let endDate = req.body.endDate;

  query12Model.query12(k_symbol, startDate, endDate, (result) => {
    console.log(result)
    res.send(result)
  })
}