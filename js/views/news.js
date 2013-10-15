define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/collection-news',
  'text!templates/news_item_template.html'
], function($, _, Backbone, NewsList, news_item_template){
	
	var NewsView = Backbone.View.extend({
		
		tagName : 'div',
		
		className : function(){
			if(this.model.collection.first() == this.model){
				console.log("active item");
				return 'active item';
			}
			else{
				console.log("item");
				return 'item';
			}
		},
		
		template: news_item_template,
		// The DOM events specific to an item.
		
		initialize: function() {
			//TODO
			//console.log("Initialize NewsView");	
		},

		// Re-render the contents of the todo item.
		render: function() {
			//console.log("RENDER NewsView");
			this.$el.html(_.template(this.template, this.model.toJSON()));
			return this.$el;
		},
	});
  // Returning instantiated views can be quite useful for having "state"
  return NewsView;
});