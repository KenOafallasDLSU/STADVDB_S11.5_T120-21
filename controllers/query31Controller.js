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
                val: 'POJISTNE',
                type: 'Insurance Payment'
            },
            {
                val: 'SIPO',
                type: 'Household'
            },
            {
                val: 'LEASING',
                type: 'Leasing Payment'
            },
            {
                val: 'UVER',
                type: 'Loan Payment'
            }
        ]

        res.render('query31',{
            pageCSS: "query31CSS",
            pageJS: "query31JS",
            pageTitle: "Query 3-1",
            navbarTitle: "Total Value of Permanent Orders of a Payment Type per District",
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