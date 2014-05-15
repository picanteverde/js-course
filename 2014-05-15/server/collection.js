module.exports = {
	collection: function(){
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
		return {
			read: function(req,res){
				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.stringify(collection));
			},
			create: function(req,res){
				collection.push(req.body);
			}
		};
	}
};