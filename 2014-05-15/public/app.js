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
	Menu = Backbone.Marionette.ItemView.extend({
		template: function(){
			return "<ul><li class=\"js-list\">list</li><li class=\"js-form\">form</li></ul>";
		},
		initialize: function(options){
			this.delegate = options.delegate;
		},
		events: {
			"click .js-list": "loadList",
			"click .js-form": "loadForm"
		},
		loadList: function(){
			this.delegate.load('list');
		},
		loadForm: function(){
			this.delegate.load('form');
		}

	}),
	FormView = Backbone.Marionette.ItemView.extend({
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
	ClientView = Backbone.Marionette.ItemView.extend({
		initialize: function(){
			var a =1;
		},
		template: _.template('<span ><%=name%></span> <span><%=lastName%></span>')
	}),
	ClientsView = Backbone.Marionette.CollectionView.extend({
		itemView: ClientView
	}),
	MainLayout = Backbone.Marionette.Layout.extend({
		template: function(){
			return '<div class="header"></div><div class="sidebar"></div><div class="content"></div>';
		},
		regions:{
			header: ".header",
			sidebar: ".sidebar",
			content: ".content"
		},
		initialize: function(options){
			this.collection = options.collection;
			this.menuView = new Menu({
				delegate: this
			});
		},
		onShow: function(){
			this.sidebar.show(this.menuView);
		},
		load: function(view){
			switch(view){
				case "form":
					this.content.show(new FormView({
						collection: this.collection
					}));
					break;
				case "list":
					this.content.show(new ClientsView({
						collection: this.collection
					}))
					break;
			}
		}
	}),
	app = new Backbone.Marionette.Application();

app.addRegions({
	"mainRegion": "#app"
});

app.addInitializer(function(){
	var clients = new ClientsCollection(),
		layout = new MainLayout({
			collection: clients
		});
	clients.fetch();
	this.mainRegion.show(layout);
});

app.start();


}());