var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myAngular'
});
con.connect((err) => {
    if (err) throw err;
    console.log('Connect');

    var sql = 'DELETE FROM customers where id= 12'; 
    // กรณีลบฐานข้อมูล var sql = "DROP TABLE customers";
    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log('ลบข้อมูลออก จำนวน : ' + result.affectedRows);
    });

});