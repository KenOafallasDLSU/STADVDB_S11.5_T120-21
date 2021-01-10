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
                type: 'Household Payment'
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
            navbarTitle: "Query 3-1",
            kSymbolList: kSymbolList,
            districtList: JSON.parse(JSON.stringify(districtList)),
            results: [
                {
                    count: 'N/A',
                    sum: 'N/A',
                    district: 'N/A',
                    kSymbol: 'N/A'
                }
            ]
        })
    })
}

exports.postQuery31 = (req, res) => {
    let district = req.body.district;
    let kSymbol = req.body.kSymbol;
  
    query31Model.query31(district, kSymbol, (results) => {
      console.log(results);
      res.send(results);
    })
};