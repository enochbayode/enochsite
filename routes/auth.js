const express = require('express');
const authrouter = express.Router();
const { Auth } = require('../middlewares/auth');
const auth = new Auth();
const aauth = require('../controllers/auth');
const {userValidation, logInValidate } = require('../middlewares/user.validation');
const { render } = require('ejs');

// authrouter.put('/updateProfile', auth.tokenRequired, aauth.updateUserProfile);

authrouter.get('/register', (req, res) => {
    res.render('signUp', { title: "Enoch's Portfolio - SignUp" });
});

authrouter.get('/signin', (req, res) => {
    res.render('signin', { title: "Enoch's Portfolio - SignIn" });
});

authrouter.get('/profile', (req, res) => {
    res.render('profile', { title: "Enoch's Portfolio - Profile Page" });
});

authrouter.post('/register', userValidation, aauth.signup);

authrouter.post('/signin', logInValidate, aauth.signin);

authrouter.post('/signout', aauth.logoutUser);


module.exports = { authrouter };
