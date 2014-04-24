(function(){
	var ClientModel = Backbone.Model.extend({
			validate: function(attr, options){
				if(!attr.name){
					alert("Name is empty!");
				}
			}
		}),
		ClientsCollection = Backbone.Collection.extend({
			url: "/api/clients",
			model: ClientModel
		}),
		ClientNewForm = Backbone.View.extend({
			initialize: function(options){
				this.collection = options.collection;
			},
			template: _.template('<h1>New Client</h1>Name: <input type="text" class="js-name"/> <br/>LastName:<input type="text" class="js-lastName"><br/><button class="js-btnSave">Save</button>'),
			events: {
				"click .js-btnSave": "save",
				"keyup .js-name": "hanldeEnterTab",
				"keyup .js-lastName": "hanldeEnterSave"
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
						lastName: uiLastName.val(),
					});

				this.collection.add(m);
				m.save();
				uiName.val("");
				uiLastName.val("");
			},
			hanldeEnterTab:function(event){
				if(event.keyCode === 13){
					this.$el.find(".js-lastName").focus();
				}
			},
			hanldeEnterSave: function(event){
				if(event.keyCode === 13){
					this.save();
					this.$el.find(".js-name").focus();
				}
			}

		}),
		ClientView = Backbone.View.extend({
			tagName: "div",
			template: _.template('<span ><%=name%></span> <span><%=lastName%></span>'),
			render: function(){
				this.$el.html(this.template(this.model.attributes));
				return this;
			}
		}),
		ClientListView = Backbone.View.extend({
			initialize: function(options){
				this.collection = options.collection;
			},

			render: function(){
				var that = this;
				this.$el.empty();
				this.collection.forEach(function(model){
					that.$el.append(new ClientView({
						model: model
					}).render().el);
				});
				return this;
			}
		});

	
	function init(){
		var clients = new ClientsCollection(),
			a = new ClientNewForm({
				el: "#newForm",
				collection: clients
			}),
			list = new ClientListView({
				el: "#list",
				collection: clients
			});

		clients.fetch();
		a.render();

		clients.on("add",function(model){
			list.render();
		});
	}


	init();

	
}());