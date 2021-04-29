const mysql = require('mysql2');

// CONNECTION STRING
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_db'
})

module.exports = connection;