// Require Express
const express = require("express");
// Allows Acesses to JSON Body from POST
const bodyParser = require("body-parser");
// Require Handlebars
const exphbs = require("express-handlebars");
// Initalise Express Server
const app = express();

// Set Default Port for Express and Heroku
let PORT = process.env.PORT || 9080;

// Add Additional Functionality to Express Using Middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// Serve Static from the "public" Directory
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");
app.use(routes);

/* Start Server */
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});
