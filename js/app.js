var app = app || {};

app.Router = Backbone.Router.extend({
	routes: {
		"" : "home",
		"project/:slug" : "project"
	},

	initialize: function() {
		this.loadProjects(function(coll, resp) {
			// console.log(coll.at(0).toJSON());
			// console.log(coll.get("picross").toJSON());
		});
	},

	home: function() {
		if (!this.homeView)
			this.homeView = new app.HomeView({ el: $("#content") });
		this.homeView.render(); // TODO: Pass el in constructor

		
	},

	project: function(slug) {
		var projectModel = this.projects.get(slug);
		if (projectModel) {

		}
		else {

		}
	},

	loadProjects: function(callback) {
		// Load/Create the collection, then fetch
		if (!this.projects) {
			this.projects = new app.Projects();
		}
		this.projects.fetch({ success: callback });
	}
});

app.router = new app.Router();
Backbone.history.start();