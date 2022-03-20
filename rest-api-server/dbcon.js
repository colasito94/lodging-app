const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    port:  3306,
    user: 'root',
    password: 'Beyondorder94',
    database: 'lodging_app',
    connectionLimit: 10,
    debug: false
});

exports.pool = pool;