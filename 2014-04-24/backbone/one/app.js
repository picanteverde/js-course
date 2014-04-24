(function(){
	var ClientNewForm = Backbone.View.extend({

			initialize: function(options){
				this.collection = options.collection;
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
				var	uiName = this.$el.find(".js-name"),
					uiLastName = this.$el.find(".js-lastName"),
					m = new ClientModel({
					name: uiName.val(),
					LastName: uiLastName.val(),
				});

				this.collection.add(m);
				uiName.val("");
				uiLastName.val("");
			}

		}),
		ClientModel = Backbone.Model.extend({
			validate: function(attr, options){
				if(!attr.name){
					alert("Name is empty!");
				}
			}
		}),
		ClientsCollection = Backbone.Collection.extend({
			model: ClientModel
		});

	
	function init(){
		var clients = new ClientsCollection(),
			a = new ClientNewForm({
				el: "#app",
				collection: clients
			});
		a.render();
	}


	init();

	
}());