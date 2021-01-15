# Query 2.1

# Original Query
SELECT d.type as holder, c.type as type, COUNT(d.disp_id) as count 
FROM disp d, card c
WHERE d.disp_id = c.disp_id
AND c.type = "gold"
AND d.type = "owner";

# Optimized Query
SELECT d.type as holder, c.type as type, COUNT(d.disp_id) as count 
FROM card c 
JOIN disp d ON c.disp_id = d.disp_id 
WHERE c.type = "gold" 
AND d.type = "owner";