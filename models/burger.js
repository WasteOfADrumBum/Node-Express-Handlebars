// import orm.js into burger.js
const orm = require("../config/orm.js");

// Model
const burger = {
	selectAll: (callback) => {
		orm.selectAll("burgers", (results) => {
			callback(results);
		});
	},

	// The variables cols and vals are arrays.
	insertOne: (cols, vals, callback) => {
		// Execute orm Function to Post Data into Database
		orm.insertOne("burgers", cols, vals, (result) => {
			callback(result);
		});
	},

	updateOne: (cols, vals, condition, callback) => {
		console.log("Executing Update One Model");
		orm.updateOne("burgers", cols, vals, condition, (result) => {
			callback(result);
		});
	},

	// update burgers id "condition" (waiting/devoured)
	findByIdAndUpdate: (id, obj, cb) => {
		const condition = "id = " + id;
		orm.updateByCondition("burgers", obj, condition, cb);
	},
};

// Exports
module.exports = burger;
