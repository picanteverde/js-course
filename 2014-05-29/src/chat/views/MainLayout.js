define([
	"templates",
	"views/Messages"
	],
function(t, Messages){
	return Backbone.Marionette.Layout.extend({
		initialize: function(options){
			this.collection = options.collection;
		},
		regions: {
			messages: ".messages",
			controls: ".controls"
		},
		template: function(){
			return window.JST["layout/main.html"];
		},
		onShow: function(){
			this.messages.show(new Messages({
				collection: this.collection
			}));
		}
	});
});