const mysql = require('../mysql.js')

exports.query12 = (k_symbol, startDate, endDate, next) => {
  console.log("in query12")
  let sql = 
   `SELECT SUM(amount) AS sum, COUNT(*) AS count, account_id AS accountID
    FROM trans
    WHERE k_symbol = '${k_symbol}' AND date >= '${startDate}' AND date <= '${endDate}'
    GROUP BY account_id`
  console.log(sql)

  mysql.db.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}