// const User = require('../models/user');
// const passport = require('passport');

// module.exports = {
// 	// POST /register
// 	async userRegister(req, res) {
// 		const newUser = User({
// 			username: req.body.username,
// 			email: req.body.email,
// 			image: req.body.image
// 		});

// 		await User.register(newUser, req.body.password);
// 		res.redirect('/auth/signin');
// 	},
// 	// POST /login
// 	userLogin(req, res, next) {
// 		passport.authenticate('local', {
// 		  successRedirect: '/auth/profile',
// 		  failureRedirect: '/auth/sigin' 
// 		})(req, res, next);
// 	},
// 	// GET /logout
// 	userLogout(req, res, next) {
// 	  req.logout();
// 	  res.redirect('/auth/signin');
// 	}
// }