// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password : 'root',
  database: 'youtube',
  dateStrings : true
});

module.exports = connection

// A simple SELECT query
// connection.query(
//   'SELECT * FROM `users`',
//   function (err, results, fields) {
//     var {id, email, name, created_at} = results[0];
//     console.log(id); // results contains rows returned by server
//     console.log(email);
//     console.log(name);  
//     console.log(created_at);
    
//     //console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
