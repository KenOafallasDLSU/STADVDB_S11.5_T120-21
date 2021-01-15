USE financial;

UPDATE account a
SET a.frequency = "Monthly"
WHERE a.frequency = "POPLATEK MESICNE";
UPDATE account a
SET a.frequency = "Weekly"
WHERE a.frequency = "POPLATEK TYDNE";
UPDATE account a
SET a.frequency = "Transactional"
WHERE a.frequency = "POPLATEK PO OBRATU";

UPDATE trans t
SET t.operation = "Credit Card Withdrawal"
WHERE t.operation = "VYBER KARTOU";
UPDATE trans t
SET t.operation = "Credit in Cash"
WHERE t.operation = "VKLAD";
UPDATE trans t
SET t.operation = "Collection from Another Bank"
WHERE t.operation = "PREVOD Z UCTU";
UPDATE trans t
SET t.operation = "Cash Withdrawal"
WHERE t.operation = "VYBER";
UPDATE trans t
SET t.operation = "Remittance to Another Bank"
WHERE t.operation = "PREVOD NA UCET";

UPDATE trans t
SET t.type = "Credit"
WHERE t.type = "PRIJEM";
UPDATE trans t
SET t.type = "Debit"
WHERE t.type = "VYDAJ" OR t.type = "VYBER";

UPDATE trans t
SET t.k_symbol = "Insurance Payment"
WHERE t.k_symbol = "POJISTNE";
UPDATE trans t
SET t.k_symbol = "Payment on Statement"
WHERE t.k_symbol = "SLUZBY";
UPDATE trans t
SET t.k_symbol = "Interest Credited"
WHERE t.k_symbol = "UROK";
UPDATE trans t
SET t.k_symbol = "Sanction Interest"
WHERE t.k_symbol = "SANKC. UROK";
UPDATE trans t
SET t.k_symbol = "Household"
WHERE t.k_symbol = "SIPO";
UPDATE trans t
SET t.k_symbol = "Retirement Pension"
WHERE t.k_symbol = "DUCHOD";
UPDATE trans t
SET t.k_symbol = "Loan Payment"
WHERE t.k_symbol = "UVER";
UPDATE trans t
SET t.k_symbol = "Misc. Payment"
WHERE (t.k_symbol IS NULL OR t.k_symbol= "")
AND t.type = "Debit";
UPDATE trans t
SET t.k_symbol = "Misc. Credit"
WHERE (t.k_symbol IS NULL OR t.k_symbol= "")
AND t.type = "Credit";

UPDATE financial.order o
SET o.k_symbol = "Insurance Payment"
WHERE o.k_symbol = "POJISTNE";
UPDATE financial.order o
SET o.k_symbol = "Household"
WHERE o.k_symbol = "SIPO";
UPDATE financial.order o
SET o.k_symbol = "Leasing Payment"
WHERE o.k_symbol = "LEASING";
UPDATE financial.order o
SET o.k_symbol = "Loan Payment"
WHERE o.k_symbol = "UVER";
UPDATE financial.order o
SET o.k_symbol = "Miscellaneous"
WHERE (o.k_symbol IS NULL OR o.k_symbol= "");