#Original Query 4.1
SELECT s.a2 as district, c.type as type, t.type as trans, 
       SUM(t.amount) as sum, COUNT(card_id) as count
FROM card c JOIN disp d ON c.disp_id = d.disp_id
            JOIN account a  ON d.account_id = a.account_id
            JOIN trans t ON a.account_id = t.account_id
            JOIN district s ON a.district_id = s.district_id
WHERE c.type = "gold"
AND t.type = "Debit"
AND s.district_id = "1";

#Optimized Query 4.1
SELECT s.a2 as district, c.type as type, t.type as trans, 
       SUM(t.amount) as sum, COUNT(card_id) as count
FROM (SELECT * 
      FROM card 
      WHERE type = "gold") c 
      JOIN disp d ON c.disp_id = d.disp_id
      JOIN (SELECT *
            FROM account
            WHERE district_id = "1") a ON d.account_id = a.account_id
      JOIN (SELECT account_id, amount, type 
            FROM trans 
            WHERE type = "Debit") t ON a.account_id = t.account_id
      JOIN district s ON a.district_id = s.district_id;