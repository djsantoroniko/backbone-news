define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/news'
], function(_, Backbone, News){
	
	var region_name = "test";
	
	var NewsList = Backbone.Collection.extend({
		
		initialize : function (models, options){
			region_name = options.region_name;
		},
		
		model: News,

		url : function(){
			console.log("Url");
			return "http://jem88.net/swipeNewsParser.php?location="+region_name+"&jsonallback=";
		},
		
		// override backbone synch to force a jsonp call
		sync: function(method, model, options) {
			// Default JSON-request options.
			var params = _.extend({
			  type:         'GET',
			  dataType:     'jsonp',
			  url:			this.url(),
			  jsonp: 		"jsoncallback",   // the api requires the jsonp callback name to be this exact name
			  processData:  false
			}, options);
	 
			// Make the request.
			return $.ajax(params);
		},
		
		parse: function(response) {
			//console.log(response);
		    return response;
		},
	
		
	});
  // You don't usually return a collection instantiated
  return NewsList;
});