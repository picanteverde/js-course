var config = require("./config.json"),
	express = require("express"),
 	bodyParser = require('body-parser'),
 	collection = require('./collection.js'),
	app = express();

app.use(bodyParser());
app.use(express.static(config.pubDir));
collection(app);

app.listen(config.port);
console.log("Server listening in port: " + config.port);