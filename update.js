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
    var sql = 'Update customers SET name="John Doe" where id=1'; //แก้ไขค่า 
    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log('จำนวนที่แก้ไข : ' + result.affectedRows);
    });

});