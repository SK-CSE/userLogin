var mongoose = require('mongoose');
var	Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/userslogin');
var db = mongoose.connection;

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
	// 9:00
}	