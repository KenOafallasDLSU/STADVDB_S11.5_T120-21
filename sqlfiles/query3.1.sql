### SQL OPTIMIZED QUERY TABLE 3.1 ###
SELECT s.a2 as district, COUNT(t.order_id) as count, SUM(t.amount) as sum	
FROM (SELECT * from financial.order where K_symbol = 'Insurance Payment') t
JOIN account a ON t.account_id = a.account_id
JOIN (SELECT district_id, a2 FROM district) s on a.district_id = s.district_id
GROUP BY s.a2;

### SQL ORIGINAL QUERY TABLE 3.1 ###
SELECT d.a2 as district, COUNT(o.order_id) as count, SUM(o.amount) as sum	
FROM financial.order o, account a, district d
WHERE o.k_symbol = 'Insurance Payment' AND o.account_id = a.account_id
	AND a.district_id = d.district_id
GROUP BY d.a2;
