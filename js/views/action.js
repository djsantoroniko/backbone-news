define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'collections/collection-news',
  'views/container-news',
  'bootstrap_select',
  'spin',
  'options_spin',
  'text!templates/action_template.html'
  
], function($, _, Backbone, Bootstrap, NewsList, NewsListView, Bootstrap_select, Spinner, Options_Spin, action_template){
	
	var app_router;
	var region;
	var requestFromUrl = false;
	
	var ActionView = Backbone.View.extend({
		
		template: action_template,

		events: {
			'click #getNews' : 'getNews'
		},
		
		initialize: function() {
			
			app_router = this.options.router;
			region = this.options.region;
			
			if(region){
				requestFromUrl = true;
				this.downloadNews(requestFromUrl);
			}else{
				requestFromUrl = false;
			}
			//target.append(spinner.el);
		},
		
		getNews: function(e){
			this.downloadNews(false);
		},
		
		downloadNews : function(request){
			console.log("Request from URL", request);
			var region_name;
			
			if(!request){
				console.log("Getting region");
				region_name = this.$el.find('#region-select')[0].value;
			}
			
			//console.log(region_name);
			
			if(region_name == 'not-selected'){
				console.log("Please select a region!");
				$(this.$el.find('#warning-alert')[0]).css('display', 'block');
			}else{
				
				var spinner = new Spinner(Options_Spin.options).spin(Options_Spin.target);
				
				$(this.$el.find('#warning-alert')[0]).css('display', 'none');
				
				var news_list = request ? new NewsList([], {region_name : region}) : new NewsList([], {region_name : region_name});
				
				news_list.fetch({reset:true});
				
				news_list.bind('reset', function(data){
					
					spinner.stop();
					
					//console.log("Collection reset");
					var news_list_view = new NewsListView({el : '#container-of-news', collection : news_list});
					news_list_view.render();
					
					//request ? app_router.navigate("#region/"+region, {trigger : true}) : app_router.navigate("#region/"+region_name, {trigger : true})  
				});
			}
		},
		
		render: function() {
			//console.log("Render");
			this.$el.html(_.template(this.template));
			return this;
		}
	});
	
  return ActionView;
});