const query31Model = require('../models/query31Model.js')

exports.renderMain = (req, res) => {
    let promise = new Promise((resolve) => {
        query31Model.queryDistrictNames((result) => {
            resolve(result)
        })
    })
    .then((districtList) => {
        let kSymbolList = [
            {
                val: 'Insurance Payment',
                type: 'Insurance Payment'
            },
            {
                val: 'Household',
                type: 'Household'
            },
            {
                val: 'Leasing Payment',
                type: 'Leasing Payment'
            },
            {
                val: 'Loan Payment',
                type: 'Loan Payment'
            },
            {
                val: 'Miscellaneous',
                type: 'Miscellaneous'
            }
        ]

        res.render('query31',{
            pageCSS: "query31CSS",
            pageJS: "query31JS",
            pageTitle: "Query 3-1",
            navbarTitle: "Query 3-1",
            kSymbolList: kSymbolList,
            districtList: JSON.parse(JSON.stringify(districtList)),
            results: [
                {
                    sum: 'N/A',
                    district: 'N/A',
                }
            ]
        })
    })
}

exports.postQuery31 = (req, res) => {
    let kSymbol = req.body.kSymbol;
  
    query31Model.query31(kSymbol, (results) => {
      console.log(results);
      res.send(results);
    })
};