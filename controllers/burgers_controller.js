const express = require("express");
// Call an Instance of the express.Router()
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

/* Get Routes */
router.get("/", function (req, res) {
	console.log("Route Path Hit");
	burger.selectAll((data) => {
		handlebarsObject = {
			burger: data,
		};
		console.log("Diplayed Burgers");
		res.render("index", handlebarsObject);
	});
});

/* Post Routes */
router.post("/api/burger", function (req, res) {
	console.log("burger Route Hit");
	burger.insertOne(
		["burger_name", "devoured"],
		[req.body.burger_name, req.body.devoured],
		(result) => {
			console.log(result);
			res.redirect("/");
		},
	);
});

// © Ben
// ORM.js -> updateByCondition
router.get("/api/burger/update", function (req, res) {
	burger.findByIdAndUpdate(
		req.query.id,
		{ devoured: req.query.devoured },
		(result) => {
			console.log("Executing First Declared CallBack");
			res.redirect("/");
		},
	);
});

// Export routes for server.js to use.
module.exports = router;
