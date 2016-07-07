/**
 * need to wrap redirects to only be in the client because
 * login hook is part of the meteor core code but logout is
 * only available through package. Made both redirects client
 * side for consistency.
 */
if(Meteor.isClient) {
	/**
	 * If user logs in successfully, redirect to recipe-book
	 */
	Accounts.onLogin(function(){
		FlowRouter.go('home');
	});

	/**
	 * If user logs out, redirect to home
	 */
	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

/**
 * If no user is logged in redirect to home route
 */
FlowRouter.triggers.enter([function(context, redirect) {
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

/**
 * Default home page route
 */
FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('home');
		}
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/users/', {
	name: 'users',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Users'});
	}
});