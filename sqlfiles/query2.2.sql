# Original Query 2.1
SELECT  l.loan_id AS loan_ID, l.date AS date, l.amount AS amount, l.status as status, (l.amount - t.amount) AS remaining
FROM  	loan l
JOIN	trans t ON l.account_id = t.account_id
WHERE 	l.account_id = 11349 and t.k_symbol='Loan Payment'
GROUP BY l.account_id;

# Optimized Query 2.2
SELECT  l.loan_id AS loan_ID, l.date AS date, l.amount AS amount, l.status as status, (l.amount - t.amount) AS remaining
FROM  loan AS l, 
    (
      select  sum(amount) as amount
      from  trans
      where account_id =${accountID} and k_symbol='Loan Payment'
) AS t
WHERE account_id = ${accountID};