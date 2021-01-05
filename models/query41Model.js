const mysql = require('../mysql.js')

exports.query41 = (cardType, district, transType, next) => {
  console.log("in query 41")
  let sql = 
   `SELECT s.a2 as district, c.type as type, t.type as trans, SUM(t.amount) as sum, COUNT(card_id) as count
    FROM (SELECT * FROM card WHERE type = "${cardType}") c JOIN disp d ON c.disp_id = d.disp_id
          JOIN account a ON d.account_id = a.account_id
          JOIN (SELECT account_id, amount, type FROM trans WHERE type = "${transType}") t ON a.account_id = t.account_id
          JOIN (SELECT district_id, a2 FROM district WHERE a2 = "${district}") s ON a.district_id = s.district_id`
  
  console.log(sql)

  mysql.db.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}

/**
 * helper to query district names for the dropdown menu
 * @param {*} next 
 */
exports.queryDistrictNames = (next) => {
  let sql = 'SELECT A2 FROM district ORDER BY A2 ASC'

  mysql.db.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}