module.exports = function(app){
	var collection = [
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
			}
		];

	app.get('/api/clients',function(req,res){
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(collection));
	});

	app.post('/api/clients', function(req,res){
		collection.push(req.body);
	});
};