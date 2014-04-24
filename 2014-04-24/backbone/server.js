var express = require("express"),
 	bodyParser = require('body-parser'),

	app = express(),
	collection = [
	{
		name: "ale",
		lastName: "hernandez"
	},
	{
		name: "julio",
		lastName: "szabo"
	},
	{
		name: "rama",
		lastName: "palacios"
	},
		];

app.use(bodyParser());
app.use(express.static("public"));

app.get('/api/clients',function(req,res){
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(collection));
});

app.post('/api/clients', function(req,res){
	collection.push(req.body);
});

app.listen(3333);