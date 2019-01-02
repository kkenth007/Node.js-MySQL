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
    var sql= 'insert into customers (name, address) VALUES ("คณิต วิจิตรปัญญา","จังหวัดเลย,ประเทศไทย")';
    con.query(sql,(err, result)=>{
        if(err) throw err;
        console.log('1 record inserted');
    });
})