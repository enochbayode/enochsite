const User  = require('../models/user');
const passport = require('passport');
const express = require('express');
const router = express.Router();
const { Utils } = require('../middleware/utils');
const { Storage } = require('../middleware/storage');
const flash = require('flash')


// instantiating the middlewares
const utils = new Utils();
// const auth = new Auth(); 
const storage = new Storage();

module.exports = {
	async userRegister(req, res) {
		const newUser = User({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password		
		});

		const existingUser = await User.findOne({
			email: req.body.email,
		});

		if (existingUser) {
			res.status(403);
			return res.json({
			  status:false,
			  error: utils.getMessage("ACCOUNT_EXISTS_ERROR"),
			});
		}

		await User.register(newUser, req.body.password);
		res.redirect('/auth/signin');
		// res.redirect('/');
	},
	// POST /login
	userLogin(req, res, next) {
		passport.authenticate('local', {
		successRedirect: '/auth/profile',
		failureRedirect: '/auth/signin'
	})(req, res, next);
	},

	// POST /login
	userProfile(req, res, next) {
		passport.authenticate('local', {
		successRedirect: '/auth/profile',
		failureRedirect: '/auth/signin'
	})(req, res, next);

		res.render('profile')
	},

	// GET /logout
	userLogout(req, res, next) {
	req.logout();
	res.redirect('/auth/signin');
	}

}