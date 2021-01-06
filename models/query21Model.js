const mysql = require('../mysql');

exports.query21 = (cardType, dispType, next) => {
  var sql = 
    `SELECT d.type as holder, c.type as type, COUNT(d.disp_id) as count 
    FROM card c JOIN disp d ON c.disp_id = d.disp_id 
    WHERE c.type = ? AND d.type = ?`;
  
  //prevents sql injection
  mysql.db.query(sql, [cardType, dispType], (err, result) => {
    if (err) throw err;
    next(result);
  });
};