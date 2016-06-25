var app = app || {};

app.utils = {
	destroyView: function(view) {
		if (view) {
			// http://stackoverflow.com/a/11534056/2079781
			view.undelegateEvents();
			view.$el.removeData().unbind();
			view.remove();
			Backbone.View.prototype.remove.call(view);
		}
	},

	getAge: function() {
		return new Date(Date.now() - new Date("June 24, 1993")).getUTCFullYear() - 1970;
	}
};