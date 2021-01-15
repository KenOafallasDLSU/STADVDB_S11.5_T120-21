# Original Query 1.1
SELECT (credit.amount-debit.amount) AS balance
FROM (
	SELECT SUM(amount) AS amount
	FROM trans
	WHERE type='Credit' AND account_id=8261 AND date>='1993-01-01' AND date<='1998-12-31'
) AS credit, (
	SELECT SUM(amount) AS amount
	FROM trans
	WHERE type='Debit' AND account_id=8261 AND date>='1993-01-01' AND date<='1998-12-31'
) AS debit;

# Optimized Query 1.1
SELECT (credit.amount-debit.amount) AS balance
FROM (
	SELECT SUM(amount) AS amount
	FROM (SELECT amount, type, date FROM trans WHERE account_id=8261) AS intermediate_trans
	WHERE type='Credit' AND date>='1993-01-01' AND date<='1998-12-31'
) AS credit, (
	SELECT SUM(amount) AS amount
	FROM (SELECT amount, type, date FROM trans WHERE account_id=8261) AS intermediate_trans
	WHERE type='Debit' AND date>='1993-01-01' AND date<='1998-12-31'
) AS debit;