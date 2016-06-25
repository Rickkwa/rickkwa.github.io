var app = app || {};

app.HomeView = Backbone.View.extend({
	template: _.template($("#home-template").html()),

	initialize: function(options) {
		this.options = options;
	},

	render: function() {
		this.$el.html(this.template({ 
			age: app.utils.getAge(), 
			contactInfos: this.options.contactInfos
		}));

		return this;
	}
});