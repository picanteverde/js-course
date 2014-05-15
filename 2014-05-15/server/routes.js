var collection = require('./collection.js').collection;

module.exports = {
	load: function(app){
		var users = collection([
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
		]),
		tasks = collection([
		{
			id: "task1",
			description: "super Task"
		}
			]);

		app.get('/api/clients',users.read);
		app.post('/api/clients',users.create);

		app.get('/api/tasks',tasks.read);
		app.post('/api/tasks',tasks.create);
	}
};