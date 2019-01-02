var mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'myangular'
});

con.connect((err)=>{
    if(err) throw err;
    console.log('Connected');
    var sql= "CREATE TABLE customers (name VARCHAR(255),address VARCHAR(255))";
    con.query(sql,(err,result)=>{
        
    if(err) throw err;
    console.log("Table created");
    });
    
})