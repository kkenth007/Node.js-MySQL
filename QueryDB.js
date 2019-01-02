var mysql = require('mysql');

var con =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:''
});

con.connect((err)=>{
    if(err) throw err;
    console.log('Connected');
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log('Result: '+result);
        
    });
});