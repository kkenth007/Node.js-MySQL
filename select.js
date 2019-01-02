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
    var sql = 'SELECT * FROM customers';    //condition SELECT * FROM customers where id=1
    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
    });
})
/*
    con.query("SELECT * FROM customers",function (err,result,fields){
        if(err) throw err;
        console.log(result);
    })
    */