define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/todos',
  'views/todos/todo',
  'text!templates/list_template.html',
  'text!templates/total_list_template.html'
  
], function($, _, Backbone, TodoList, TodoView, list_template, total_list_template){
	
    	var TotalListView = Backbone.View.extend({
    		
    		template: list_template,
    		
    		initialize: function() {
    			console.log("Initialize ListView");
    			var todos = this.collection;

    			_.bindAll(this, 'addOne');

    			todos.bind('add', this.addOne);
    		},

    		addOne: function(todo) {
    			console.log("addOne");
    			var view = new TodoView({model: todo});
    			//this.$el.find('#todo-list')[0].append(view.render().el);
    			//view.render().appendTo(this.$el.find('#todo-list')[0]);
    			this.render();
    			//this.collection.each(function(data){console.log("DATA: "+data)});
    		},

    		render: function() {
    			console.log("Render TotalListView");
    			//this.$el.html(_.template(this.template));
    			
    			/*_.each(this.collection.models, function(data){
    			      console.log("DATA: ", data.attributes.content);
    			    });*/
    			console.log("JSON", this.collection.toJSON());
    			
    			this.$el.html(_.template(total_list_template, {collection : this.collection}));
    			
    			return this;
    		}
    	});
	
  // Returning instantiated views can be quite useful for having "state"
  return TotalListView;
});