var config = require("./config.json"),
	express = require("express"),
 	bodyParser = require('body-parser'),
 	routes = require('./routes.js'),
	app = express();

app.use(bodyParser());
app.use(express.static(config.pubDir));
routes.load(app);

app.listen(config.port);
console.log("Server listening in port: " + config.port);