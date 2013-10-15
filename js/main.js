require.config({
	
  paths: {
    jquery: 'libs/jquery/jquery-1.10.2-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone',
    bootstrap: 'libs/bootstrap/bootstrap.min',
    bootstrap_select: 'libs/bootstrap/bootstrap-select',
    spin : 'libs/spin/spin',
    options_spin : 'libs/spin/options_spin'
  },
  
  shim: {
      'backbone': {
          //These script dependencies should be loaded before loading
          //backbone.js
          deps: ['underscore', 'jquery'],
          //Once loaded, use the global 'Backbone' as the
          //module value.
          exports: 'Backbone'
      },
      'underscore': {
          exports: '_'
      }
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){

  // The "app" dependency is passed in as "App"
  App.initialize();
});
