const express = require('express');
const authrouter = express.Router();
const { Auth } = require('../middlewares/auth');
const aauth = require('../controllers/auth');
const userValidation = require('../middlewares/user.validation')

// instantaite Auth
const auth = new Auth();

authrouter.put('/updateProfile', auth.tokenRequired, aauth.updateUserProfile);

// Get signUp
authrouter.get('/signup', (req, res) => {
    res.render('signUp', { title: "Enoch's Portfolio - SignUp" });
});

// Post 
authrouter.post('/signup', userValidation,  aauth.signup);

authrouter.get('/signin', (req, res) => {
    res.render('signIn', { title: "Enoch's Portfolio - SignIn" });
});

authrouter.get('/profile', (req, res) => {
    res.render('profile', { title: "Enoch's Portfolio - Profile" });
});

authrouter.post('/signout', aauth.logoutUser);



module.exports = { authrouter };
