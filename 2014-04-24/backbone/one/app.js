(function(){
	var MyView = Backbone.View.extend({

		initialize: function(){

		},
		template: _.template("<h1><%=title%></h1> <button class=\"js-btnSave\">Save</button>"),
		events: {
			"click .js-btnSave": "save"
		},
		render: function() {
			this.$el.html(this.template(this.model.attributes));
			return this;
		},
		save: function(){
			alert("Trying to Save"); 
		}

	});

	var a = new MyView({
		el: "#app",
		model: new Backbone.Model({
			title: "hola"
		})
	});

	a.render();
}());