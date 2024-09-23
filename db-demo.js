// CREATE TABLE youtube.channels (
// id INT NOT NULL AUTO_INCREMENT,
// name VARCHAR(100) NOT NULL,
// sub_num INT NOT NULL DEFAULT 0,
// video_count INT NULL DEFAULT 0,
// user_id INT NULL,
// PRIMARY KEY (id),
// INDEX user_id_idx (user_id ASC) VISIBLE,
// CONSTRAINT user_id
// FOREIGN KEY (user_id)
// REFERENCES youtube.users (id)
// ON DELETE NO ACTION
// ON UPDATE NO ACTION);


// CREATE TABLE `youtube`.`users` (
// `id` INT NOT NULL AUTO_INCREMENT,
// `email` VARCHAR(100) NOT NULL,
// `name` VARCHAR(45) NOT NULL,
// `password` VARCHAR(20) NOT NULL,
// `contact` VARCHAR(45) NULL,
// UNIQUE INDEX `email_UNIQUE` (`email` DSC) VISIBLE,
// PRIMARY KEY (`id`));

// DSC = 내림차순
// ASC = 오름차순
// 데이터베이스 코드 

// 여기서부터는 mysql2 npm 쿼리
// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : 'root',
  database: 'youtube',
  dateStrings : true
});

// A simple SELECT query
connection.query(
  'SELECT * FROM `users`',
  function (err, results, fields) {
    var {id, email, name, created_at} = results[0];
    console.log(id); // results contains rows returned by server
    console.log(email);
    console.log(name);  
    console.log(created_at);
    
    //console.log(fields); // fields contains extra meta data about results, if available
  }
);


