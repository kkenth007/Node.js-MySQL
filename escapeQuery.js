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

    //ทุกครั้งที่มีการดึงข้อมูล should escape the values.  เพื่อป้องกัน การ ใช้ SQL injections
    // ex1
    /**var b='นก';
    var sql = 'SELECT id,name FROM customers where name ='+mysql.escape(b); ค้นหาโดยอ้ายตัวแปล
     */

    //  ex2 variable is sent as the second parameter in the query() 
    // var name='เบน';
    // var sql = 'SELECT id,name FROM customers where name = ?';  
    // con.query(sql,[name] ,(err, result, fields) => {
    //     if (err) throw err;
    //     console.log(result);
    // });

    //ex3 multiple placeholders
    var name = 'เบน';
    var id = 7;
    var sql = 'SELECT id,name FROM customers where name = ? and id=?';
    con.query(sql, [name, id], (err, result, fields) => {
        if (err) throw err;
        console.log(result);
    });

});