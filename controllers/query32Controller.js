const query32Model = require('../models/query32Model.js')

exports.renderMain = (req, res) => {
    res.render('query32', {
    pageCSS: "query32CSS",
    pageJS: "query32JS",
    pageTitle: "Query 3-2",
    navbarTitle: "Query 3-2",
    kSymbolList: [
      {
        val: 'POJISTNE',
        type: 'Insurance Payment'
      },
      {
        val: 'SLUZBY',
        type: 'Payment of Statement',
      },
      {
        val: 'UROK',
        type: 'Interest Credited'
      },
      {
        val: "SANKC. UROK",
        type: 'Sanction Interest if Negative Balance'
      },
      {
        val: 'SIPO',
        type: 'Household Payment'
      },
      {
        val: 'DUCHOD',
        type: 'Old-age Pension Payment'
      },
      {
        val: 'UVER',
        type: 'Loan Payment'
      }
    ],
    results: [
      {
        district: 0,
        count: 0,
        sum: 0
      }
    ]
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