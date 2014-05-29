module.exports = {
	collection: function(coll){
		return {
			read: function(req,res){
				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.stringify(coll));
			},
			create: function(req,res){
				coll.push(req.body);
			}
		};
	}
};