define([
        'underscore',
        'backbone'
      ], function(_, Backbone){
	
		var News = Backbone.Model.extend({
			
			news : {
				title : 'Test_title',
				description : 'Test_descritpion',
				imageLink : 'Test_link'
			}
		});
        
     // Return the model for the module
     return News;
});