const mysql = require('../mysql.js')

exports.query11 = (accountID, startDate, endDate, next) => {
  console.log("in query11")
  let sql = 
   `SELECT (credit.amount-debit.amount) AS balance
    FROM 
    (
      SELECT SUM(amount) AS amount
      FROM trans
      WHERE type='Credit' AND account_id=${accountID} AND date>='${startDate}' AND date<='${endDate}'
    ) AS credit, 
    (
      SELECT SUM(amount) AS amount
      FROM trans
      WHERE type='Debit' AND account_id=${accountID} AND date>='${startDate}' AND date<='${endDate}'
    ) AS debit;`
  
  console.log(sql)

  mysql.db.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}