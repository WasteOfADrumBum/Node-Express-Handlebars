// ╔════════╗
// ║ Models ║
// ╚════════╝

// Model → Table (burgers) Specific ORM

// import orm.js into burger.js
const orm = require("../config/orm.js");

// Model
const burger = {
	all: (cb) => {
		orm.all("burgers", (res) => {
			cb(res);
		});
	}, // → orm.js selectAll

	insertOne: (cols, vals, cb) => {
		// tableName, cols, vals, cb
		orm.insertOne("burgers", cols, vals, (res) => {
			cb(res);
		});
	}, // → orm.js insertOne

	// © Ben
	updateOne: (id, obj, cb) => {
		// update burgers id "condition" (waiting/devoured)
		const condition = "id = " + id;
		orm.updateOne("burgers", obj, condition, cb);
	}, // → orm.js updateOne

	deleteOne: (id, cb) => {
		const condition = "id = " + id;
		orm.deleteOne("burgers", condition, cb);
	}, // → orm.js deleteOne
};

// Exports → burger.js
module.exports = burger;
