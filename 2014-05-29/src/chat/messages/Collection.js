define([],
	function(){
		var Model = Backbone.Model.extend({
			validate: function(attr, options){
				if(!attr.name){
					alert("Name is empty!");
				}
			}
		}),
		Collection = Backbone.Collection.extend({
			url: "/api/messages",
			model: Model
		});

		return Collection;
	});