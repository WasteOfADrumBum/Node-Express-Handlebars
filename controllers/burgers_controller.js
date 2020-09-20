// ╔════════╗
// ║ Routes ║
// ╚════════╝

const express = require("express");
// Call an Instance of the express.Router()
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
	burger.all((data) => {
		var hbsObj = { burger: data };
		res.render("index", hbsObj);
	});
});

// Post Route: Add Burger
router.post("/api/burger", (req, res) => {
	burger.insertOne(
		// → orm.js insertOne
		["burger_name", "devoured"],
		// add burger_name and devoured=false
		[req.body.burger_name, req.body.devoured],
		(result) => {
			// Send back the ID of the new quote
			// res.json({ id: result.insertId }); // +
			res.redirect("/");
		},
	);
});

// © Ben
// Get burger to update
router.get("/api/burger/update", (req, res) => {
	burger.updateOne(req.query.id, { devoured: req.query.devoured }, (result) => {
		res.redirect("/");
	});
});

// -------------------- ↓ NOT WORKING ↓ --------------------
router.post("/api/burger/delete", (req, res) => {
	console.log(req.body);
	burger.deleteOne(req.body.id, (result) => {
		console.log("Delete Router");
		res.redirect("/");
	}); // → burgers.js findByIdAndRemove
});

// Export routes for server.js to use
module.exports = router;
