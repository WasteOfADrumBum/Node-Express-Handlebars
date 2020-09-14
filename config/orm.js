// Import MySQL connection
const connection = require("../config/connection.js");
const tableName = "burgers";

// Helper Function
function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

// ORM
const orm = {
	selectAll: (tableName, callback) => {
		let queryStatement = `SELECT * FROM ${tableName};`;
		// initialize
		connection.query(queryStatement, (err, result) => {
			if (err) throw err;
			callback(result);
		});
	},

	// Insert burger into burgers_db displaying it on the waitlist
	insertOne: (tableName, cols, vals, callback) => {
		let queryStatement = `INSERT INTO  ${tableName} (${cols.toString()}) VALUES (${printQuestionMarks(
			vals.length,
		)});`;
		// add burger
		connection.query(queryStatement, vals, (err, result) => {
			if (err) throw err;
			callback(result);
		});
	},

	// © Ben
	// updtae the condition of the burger waitlist/devoured
	updateByCondition: (tableName, obj, condition, callback) => {
		let queryStatement = `UPDATE ?? SET ? WHERE ${condition}`;
		const data = [tableName, obj];
		// update condition
		connection.query(queryStatement, data, (err, result) => {
			if (err) throw err;
			callback(result);
		});
	},
};

// Exports
module.exports = orm;
