'user strict';

const mysql = require('mysql');


const dbConn = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : 'root@2208',
 database : 'node_api_db'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;