# Original Query 1.2
SELECT SUM(amount), COUNT(*), account_id
FROM trans
WHERE k_symbol='Misc. Credit' AND date>='1993-01-01' AND date<='1998-12-31'
GROUP BY account_id;

# Optimized Query 1.2
SELECT SUM(amount), COUNT(*), account_id
FROM (SELECT amount, account_id, k_symbol FROM trans WHERE date>='1993-01-01' AND date<='1998-12-31') AS minitrans
WHERE k_symbol='Misc. Credit'
GROUP BY account_id;