var mongoose = require('mongoose');
var	Schema 	 = mongoose.Schema;
var bcrypt   = require('bcryptjs');


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
};

module.exports.getUserByUsername = function(username,callback){
	var query = {username : username};
	User.findOne(query,callback);
};

module.exports.getUserById = function(id,callback){
	User.findById(id,callback);
};

module.exports.comparePassword = function(passwordTyped, hash, callback){
	// Load hash from your password DB. 
	bcrypt.compare(passwordTyped, hash, function(err, isMatch) {
		if(err) throw err;
		callback(null,isMatch);
	});
}	