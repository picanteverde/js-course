define([
	"messages/Collection",
	"views/MainLayout"
	],
	function(Collection, MainLayout){
		var messages = new Collection(),
			app = new Backbone.Marionette.Application();

		app.addRegions({
			"mainRegion": "#app"
		});

		messages.fetch();

		app.addInitializer(function(){
			this.mainRegion.show(new MainLayout({
				collection: messages
			}));
		});

		return app;
	});