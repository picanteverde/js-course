define([
	"templates"
	],
function(t, Messages){
	var MessageView = Backbone.Marionette.ItemView.extend({
			template: function(serialized){
				return window.JST["messages/message.html"](serialized);
			}
		}),
		MessagesView = Backbone.Marionette.CollectionView.extend({
			itemView: MessageView
		});

	return MessagesView;
});