define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/collection-news',
  'views/news',
  'text!templates/news_template.html'
], function($, _, Backbone, NewsList, NewsView, news_template){
	
    	var NewsListView = Backbone.View.extend({
    		
    		template: news_template,
    		
    		initialize: function() {
    			//TODO
    			//console.log("Initialize NewsListView");
    		},

    		render: function() {
    			//console.log("Render NewsListView and getting single news");
    			this.$el.html(_.template(this.template));
    			
    			var news = this.collection;
    			_.each(news.models, _.bind(function(model){
    				//console.log("Model", model);
    				var news_view = new NewsView({model : model});
        			news_view.render().appendTo(this.$el.find('.carousel-inner')[0]);
    			}, this));
    			return this;
    		}	
    	});
	
  // Returning instantiated views can be quite useful for having "state"
  return NewsListView;
});