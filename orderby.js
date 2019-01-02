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

    var sql = 'SELECT id,name FROM customers order by id DESC';
    //เรียกจาก มากไปน้อย     var sql = 'SELECT id,name FROM customers order by id DESC';
    con.query(sql,(err, result, fields) => {
        if (err) throw err;
        console.log(result);
    });

});