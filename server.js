// Require Express
const express = require("express");
// Require Path
const path = require("path");
// Allows Acesses to JSON Body from POST
const bodyParser = require("body-parser");
// Require Handlebars
const exphbs = require("express-handlebars");
// Initalise Express Server
const app = express();
// Set Default Port for Express and Heroku
let PORT = process.env.PORT || 9080; // https://localhost:9080
// Add Additional Functionality to Express Using body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// Serve Static from the "public" Directory
// app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static("public"));
// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes from burgers_controller.js
const routes = require("./controllers/burgers_controller.js");
app.use(routes);
// Start Server
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});
