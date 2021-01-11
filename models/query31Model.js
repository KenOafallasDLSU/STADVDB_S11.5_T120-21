const mysql = require('../mysql.js')

exports.query31 = (kSymbol, next) => {
  console.log("in query 31")
  let sql = 
   `SELECT s.a2 as district, SUM(t.amount) as sum
   FROM (SELECT * from financial.order where K_symbol = "${kSymbol}") t
   JOIN account a ON t.account_id = a.account_id
   JOIN (SELECT district_id, a2 FROM district) s on a.district_id = s.district_id
   GROUP BY s.a2`
  
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