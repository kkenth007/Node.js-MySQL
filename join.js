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
    var sql = 'Select users.name AS User, products.name AS favorite From users JOIN products  ON users.favorite_product = products.id'; //แสดงค่า ตั้งแต่ 2-4 โดยนับจาก 0 LIMIT 2,4
    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
    });

    // [ RowDataPacket { User: 'John', favorite: 'ส้มตำ' },
    // RowDataPacket { User: 'Peter', favorite: 'ผัดผัก' },
    // RowDataPacket { User: 'Amy', favorite: 'ไข่เจียว' } ]
});