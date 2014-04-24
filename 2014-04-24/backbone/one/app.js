(function(){
	var ClientNewForm = Backbone.View.extend({

		initialize: function(){

		},
		template: _.template('<h1>New Client</h1>Name: <input type="text" class="js-name"/> <br/>LastName:<input type="text" class="js-lastName"><br/><button class="js-btnSave">Save</button>'),
		events: {
			"click .js-btnSave": "save"
		},
		render: function() {
			this.$el.html(this.template());
			return this;
		},
		save: function(){
			alert("Trying to Save"); 
		}

	});

	var a = new ClientNewForm({
		el: "#app"
	});

	a.render();
}());