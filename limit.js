var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myangular'
});
con.connect((err) => {
    if (err) throw err;
    console.log('Connect');
    var sql = 'SELECT name FROM customers LIMIT 4'; //แสดงค่า ตั้งแต่ 2-4 โดยนับจาก 0 LIMIT 2,4

    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
    });

});