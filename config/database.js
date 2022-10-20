const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'itaimysql',
    database: 'passarinho_api'
})