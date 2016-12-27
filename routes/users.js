var express = require('express');
var router = express.Router();

// Register 
router.get('/register', function(req, res) {
  res.render('register');
});

// Login 
router.get('/login', function(req, res) {
  res.render('login');
});

// Register User
router.post('/register', function(req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// Validation
	req.assert('name','Name is required').notEmpty();
	req.assert('email','email is required').notEmpty();
	req.assert('email','email is not valid').isEmail();
	req.assert('username','username is required').notEmpty();
	req.assert('password','password is required').notEmpty();
	req.assert('password2','passwords do not match').equals(req.body.password);


	var errors = req.validationErrors();
	if (errors) {
	  res.render('register',{
	  	errors : errors
	  });
	}else{
	  console.log("passed");
	}
});

module.exports = router;
