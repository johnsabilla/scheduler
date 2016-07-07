Meteor.publish('businesses', function(){
	return Businesses.find();
});   

Meteor.publish('users', function(){
	return Meteor.users.find({});
});