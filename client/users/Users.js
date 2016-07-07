//Subscribe to Users collection
Template.Users.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('users');
	});
});


// //List of users
// Template.Users.helpers({
// 	users: ()=> {
// 		return Users.find({});
// 	}
// });

// Template.Users.events({
// 	'click .new-recipe': ()=> {
// 		Session.set('newUser', true);
// 	}
// });