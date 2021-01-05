const query41Model = require('../models/query41Model.js')

exports.renderMain = (req, res) => {
  let promise = new Promise((resolve) => {
    query41Model.queryDistrictNames((result) => {
      resolve(result)
    })
  })
  .then((districtList) => {
    let cardTypeList = [
      {
        type: 'Gold',
        val: 'gold'
      },
      {
        type: 'Classic',
        val: 'classic'
      },
      {
        type: 'Junior',
        val: 'junior'
      }
    ]

    res.render('query41', {
      pageCSS: "query41CSS",
      pageJS: "query41JS",
      pageTitle: "Query 4-1",
      navbarTitle: "Query 4-1",
      cardTypeList: cardTypeList,
      districtList: JSON.parse(JSON.stringify(districtList)),
      results: [
        {
          district: 'Manila',
          type: 'Electric',
          trans: 'PRIJEM',
          sum: '100',
          count: '1001'
        }
      ]
    })
  })
}

exports.postQuery41 = (req, res) => {
  let cardType = req.body.cardType;
  let district = req.body.district;
  let transType = req.body.transType;

  query41Model.query41(cardType, district, transType, (result) => {
    console.log(result)
    res.send(result)
  })
}