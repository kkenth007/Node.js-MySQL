var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myAngular'
});
//ตอนรันไห้ดูดีๆว่า terminal ยุใน path หรือ ยัง cd...
con.connect((err) => {
    if (err) throw err;
    console.log('Connect');

    /**var b='นก';
    var sql = 'SELECT id,name FROM customers where name ='+mysql.escape(b); ค้นหาโดยอ้ายตัวแปล
     */

    var sql = 'SELECT id,name FROM customers';    //condition SELECT * FROM customers where id=1
    //'SELECT * FROM customers where address like "จ%"'; 
    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result);//result[2].name
        //console.log(fields); detail stuctor fields[1].name
    });
});