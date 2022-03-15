// const User = require('../models/user');
// const passport = require('passport');
// // const _pass = 

// module.exports = {
// 	userRegister(req, res) {
// 		const newUser = User({
// 			// email: req.body.email,
// 			username: req.body.username,
// 			password: req.body.password
			
// 		});

// 		console.log(username);
// 		User.register(newUser, req.body.password);
// 		res.redirect('/auth/signIn');
// 	},
// 	// POST /login
// 	userLogin(req, res, next) {
// 		passport.authenticate('local', {
// 		successRedirect: '/auth/profile',
// 		failureRedirect: '/auth/signIn' 
// 		})(req, res, next);
// 	},
// 	// GET /logout
// 	userLogout(req, res, next) {
// 	req.logout();
// 	res.redirect('/auth/signIn');
// 	}
// }