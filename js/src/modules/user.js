define(["backbone", "jquery", "underscore"], function(BB, $, _){

	var User = {Views: {}};

	User.Model = BB.Model.extend({});

	User.Collection = BB.Collection.extend({
		model: User.Model
	});

	User.Views.Model = BB.View.extend({
		tagName: 'li',

		render: function () {
			this.$el.html( this.model.get('name') );
			return this;
		}
	});

	User.Views.Collection = BB.View.extend({
		tagName: 'ul',

		render: function(){
			this.collection.forEach(function(model){
				this.$el.append( new User.Views.Model({model: model}).render().el );
			}, this);

			return this;
		}
	});

	return User;

});