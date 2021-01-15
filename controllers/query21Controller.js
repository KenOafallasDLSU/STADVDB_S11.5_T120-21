const query21Model = require('../models/query21Model');

exports.getQuery21 = (req, res) => {
  res.render('query21', {
    navbarTitle: "Count of Credit Card Holders of a Type and Disposition",
    pageTitle: "Query 2-1",
    pageJS: "query21JS",
    pageCSS: "query21CSS",
    selectCardLabel: "Select Card Type",
    selectCardOptions: [
      {option: "Gold"},
      {option: "Classic"},
      {option: "Junior"}
      ],
    selectHolderLabel: "Select Card Holder Type",
    selectHolderOptions: [
      {option: "Owner"},
      {option: "Disponent"}
    ],
    tableHeaders: [
      {label: "Holder Type"},
      {label: "Card Type"},
      {label: "Count"}
    ],
    results: [{
      holder: 'N/A',
      type: 'N/A',
      count: 'N/A'
    }]
  });
};

exports.postQuery21 = (req, res) => {
  let cardType = req.body.cardType;
  let dispType = req.body.dispType;

  query21Model.query21(cardType, dispType, (results, err) => {
    console.log(results);
    res.send(results);
  })
};