// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// MySQLHerokuDeploymentProcess.pdf
// Cretae connection to JawsDB to use on Heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// Local MySQL
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		// User login
		user: "root",
		password: "12345678",
		// burgers_db created in schema.sql
		database: "burgers_db",
	});
}

// Make and verify connection
connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;
