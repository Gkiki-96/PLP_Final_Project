//Import
const mysql = require ('mysql2');

// Create a connection
const connection = mysql.createConnection ({
    host : 'localhost',
    user : 'root',
    password : 'Joselumi@25',
    database : 'noveldb'
});

connection.connect ((err) => {
    if (err) {
        console.error ('Database connection failed', err.stack);
        return;
    }
    console.log ('Connected to MYSQL database')
});

module.exports =connection;