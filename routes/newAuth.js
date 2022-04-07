const express = require('express');
const authrouter = express.Router();
const { Auth } = require('../middlewares/auth');
const auth = new Auth();
const aauth = require('../controllers/auth');
const userValidation = require('../middlewares/user.validation')

// authrouter.put('/updateProfile', auth.tokenRequired, aauth.updateUserProfile);

authrouter.get('/register', (req, res, next) => {
    res.render('signUp', { title: "Enoch's Portfolio - SignUp" });
});

authrouter.get('/signin', (req, res, next) => {
    res.render('signIn', { title: "Enoch's Portfolio - SignIn" });
});

authrouter.post('/register', userValidation,  aauth.signup);

authrouter.post('/signin', aauth.signin);

authrouter.post('/signout', aauth.logoutUser);



module.exports = { authrouter };
