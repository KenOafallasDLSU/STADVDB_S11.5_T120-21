const mysql = require('../mysql.js')

exports.query32 = (k_symbol, startDate, endDate, next) => {
  console.log("in query 32")
  let sql = 
   `SELECT s.a2 AS district, COUNT(t.trans_id) AS count, SUM(t.amount) AS sum
    FROM (SELECT * FROM trans WHERE k_symbol = '${k_symbol}' AND date >= '${startDate}' AND date <= '${endDate}') t 
    JOIN account a ON t.account_id = a.account_id
    JOIN (SELECT district_id, a2 FROM district) s ON a.district_id = s.district_id
    GROUP BY s.a2;`
  
  console.log(sql)

  mysql.db.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}

