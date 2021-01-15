const query32Model = require('../models/query32Model.js')

exports.renderMain = (req, res) => {
    res.render('query32', {
    pageCSS: "query32CSS",
    pageJS: "query32JS",
    pageTitle: "Query 3-2",
    navbarTitle: "Summary of Transactions of a Payment Type in a Certain Timespan per District",
    kSymbolList: [
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

exports.postQuery32 = (req, res) => {
  let k_symbol = req.body.k_symbol
  let startDate = req.body.startDate;
  let endDate = req.body.endDate;

  query32Model.query32(k_symbol, startDate, endDate, (result) => {
    console.log(result)
    res.send(result)
  })
}