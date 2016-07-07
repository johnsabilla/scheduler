//New mongo collection
Businesses = new Mongo.Collection('businesses');

User = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	email: {
		type: String,
		label: "Email"
	},
	userType: {
		type: String,
		label: "User Type"
	}
})
//Schema for a business
BusinessSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	description: {
		type: String,
		label: "Description"
	},
	businessType: {
		type: String,
		label: "Business Type"
	},
	owners: {
		type: [User]
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
	}
});

Businesses.attachSchema( BusinessSchema );