var mongoose = require('mongoose');
var	Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');


var UserSchema = new Schema({

	username: {
		type: String,
		index:true
	},

	password: {
		type: String
	},

	email: {
		type: String
	},

	name: {
		type: String
	}
});

var User = module.exports = mongoose.model('user',UserSchema);

module.exports.createUser = function(newUser, callback){
	
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        // Store hash in your password DB. 
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}	