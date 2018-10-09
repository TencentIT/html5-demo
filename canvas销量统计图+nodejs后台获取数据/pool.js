const mysql = require("mysql")
var pool = mysql.createPool({
	host:"127.0.0.1",
	user:"root",
	password:"",
	database:"10.9homeworktongjibiao",
	connectionLimit:10
});

module.exports = pool;