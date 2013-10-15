define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'views/action'

], function($, _, Backbone, Bootstrap, ActionView){
	
	var AppRouter = Backbone.Router.extend({
        routes: {
        	
        	"" : "home", 
        	
        	"region/:name": "getRegion",
        	
            "*actions": "defaultAction", // matches http://example.com/#anything-here
            
            
        }
    });

  var initialize = function(){
	  console.log("Initialize Router");
	  
	    // Initiate the router
	  var app_router = new AppRouter;
	  
	  	app_router.on('route:home', function() {
	  		//console.log("Home");
	  		var action_view = new ActionView({
	  			el : "#container-of-button",
	  			router : app_router
	  		});
	  		action_view.render();	
	    });
	  	
	  	app_router.on('route:getRegion', function (region_name) {
	        console.log( "City: " + region_name);
	        
	        var action_view = new ActionView({
	  			el : "#container-of-button",
	  			router : app_router,
	  			region : region_name
	  		});
	  		action_view.render();
	    });
	  	
	    app_router.on('route:defaultAction', function(actions) {
	        //console.log("Route: "+actions);
	    });

	    Backbone.history.start();
  };
  
  	return {
  		initialize: initialize
  	};
  
});
