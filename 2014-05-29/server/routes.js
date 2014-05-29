var collection = require('./collection.js').collection;

module.exports = {
	load: function(app){
		var messages = collection([
			{
				source: "ale",
				content: "hernandez"
			},
			{
				source: "julio",
				content: "szabo"
			},
			{
				source: "rama",
				content: "palacios"
			},
		]);
		app.get('/api/messages',messages.read);
		app.post('/api/messages',messages.create);
	}
};