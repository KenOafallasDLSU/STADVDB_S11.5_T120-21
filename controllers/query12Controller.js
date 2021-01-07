const query12Model = require('../models/query12Model.js')

exports.renderMain = (req, res) => {
  res.render('query12', {
    pageCSS: "query12CSS",
    pageJS: "query12JS",
    pageTitle: "Query 1-2",
    navbarTitle: "Query 1-2",
    charTypeList: [
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
        val: 'SANKC. UROK',
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
        k_symbol: 'Loan Payment',
        start_date: 'wow',
        end_date: 'zers',
        sum: 0,
        count: 0
      }
    ]
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