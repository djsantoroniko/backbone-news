define([
  'jquery',
  'underscore',
  'backbone',

], function($, _, Backbone, ActionView){
	
	var AppRouter = Backbone.Router.extend({
        routes: {
        	
        	"" : "home", 
        	
            "*actions": "defaultAction" // matches http://example.com/#anything-here
        },
        
        initialize : function(){
        	console.log('INIT');
        	/*this.objects = new ObjectList();
        	this.objects.on('add', _.bind(function(){
      		  	console.log("add");
        		console.log(this.objects.models);
  		  	}, this));*/
        }
	
	
    });

  var initialize = function(){
	  console.log("Initialize Router");
	  
	    // Initiate the router
	  var app_router = new AppRouter;
	  
	  	app_router.on('route:home', function() {
	        console.log("Home");
	        //this.objects.fetch({reset: false});
	    });
	  	
	    app_router.on('route:defaultAction', function(actions) {
	        console.log("Route: "+actions);
	    });

	    Backbone.history.start();
  };
  
  	return {
  		initialize: initialize
  	};
  
});
