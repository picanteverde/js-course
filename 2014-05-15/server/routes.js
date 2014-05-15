var collection = require('./collection.js').collection();

module.exports = {
	load: function(app){
		app.get('/api/clients',collection.read);
		app.post('/api/clients',collection.create);
	}
};