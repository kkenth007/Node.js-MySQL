var mysql = require('mysql');

var con =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'myAngular'
});

con.connect((err)=>{
    if(err) throw err;
    console.log('Connect');
    var sql= 'insert into customers (name, address) VALUES ?';
    var values = [
        ['เคน','เลย'],
        ['นก','อุดร'],
        ['เบน','กรุงเทพ']
    ];
    con.query(sql,[values],(err, result)=>{
        if(err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
})