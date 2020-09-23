// ╔═════╗
// ║ ORM ║
// ╚═════╝

// Import MySQL connection
const connection = require("../config/connection.js");

// Helper Function → insertOne
function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

// ORM
const orm = {
	// burger.js selectAll →
	all: (tableName, cb) => {
		var queryString = `SELECT * FROM ??`;
		// load table
		connection.query(queryString, [tableName, cb], (err, res) => {
			if (err) throw err;
			cb(res);
		});
	},

	// burger.js insertOne →
	insertOne: (tableName, cols, vals, cb) => {
		var queryString = `INSERT INTO  ${tableName} (${cols.toString()}) VALUES (${printQuestionMarks(
			vals.length,
		)});`;
		// add burger
		connection.query(queryString, vals, (err, res) => {
			if (err) throw err;
			cb(res);
		});
	},

	// © Ben
	// burger.js updateOne →
	updateOne: (tableName, obj, condition, cb) => {
		var queryString = `UPDATE ?? SET ? WHERE ${condition}`;
		// update condition
		connection.query(queryString, [tableName, obj], (err, res) => {
			if (err) throw err;
			cb(res);
		});
	},

	// burger.js deleteOne →
	deleteOne: (tableName, condition, cb) => {
		var queryString = `DELETE FROM ${tableName} WHERE ${condition}`;
		connection.query(queryString, (err, res) => {
			if (err) throw err;
			cb(res);
		});
	},
};

// Exports → orm.js
module.exports = orm;
