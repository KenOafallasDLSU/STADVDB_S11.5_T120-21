#QUERY 3.2
#Original Query
SELECT d.a2 AS district, COUNT(t.trans_id) AS count, SUM(t.amount) AS sum
FROM trans t, account a, district d
WHERE t.k_symbol = "UROK" AND t.date >= "1995-04-13" AND t.date <= "1995-06-13"
	AND t.account_id = a. account_id
    AND a.district_id = d.district_id
GROUP BY d.a2;


#Optimized Query
SELECT s.a2 AS district, COUNT(t.trans_id) AS count, SUM(t.amount) AS sum
FROM (SELECT * FROM trans WHERE k_symbol = "UROK" AND date >= '1995-04-13' AND date <= '1995-06-13') t 
JOIN account a ON t.account_id = a.account_id
JOIN (SELECT district_id, a2 FROM district) s ON a.district_id = s.district_id
GROUP BY s.a2;

