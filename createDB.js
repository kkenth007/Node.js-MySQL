var mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
});

con.connect((err)=>{
    if(err) throw err;
    console.log('Connectted');
    con.query("CREATE DATABASE myAngular", (err,result)=>{
        if(err) throw err;
        console.log('Database Created');
        
    });
    
});