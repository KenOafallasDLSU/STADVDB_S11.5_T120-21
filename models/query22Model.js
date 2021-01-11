const mysql = require('../mysql.js')

exports.query22 = (accountID, next) => {
  console.log("in query22")
  let sql = 
   `SELECT  l.loan_id AS loan_ID, l.date AS date, l.amount AS amount, l.status as status, (l.amount - t.amount) AS remaining
    FROM  loan AS l, 
    (
      select  sum(amount) as amount
      from  trans
      where account_id =${accountID} and k_symbol='Loan Payment'
    ) AS t
    where account_id = ${accountID};`
  
  console.log(sql)

  mysql.db.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}