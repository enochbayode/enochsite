// const express = require('express');
// const authrouter = express.Router();
// const { Auth } = require('../middlewares/auth');
// const aauth = require('../controllers/auth');
// const userValidation = require('../middlewares/user.validation')
// const passport = require('../controllers/passport')


const express = require('express');
const router = express.Router();
// const userAuth = require('../controllers/userAuth')
const { userRegister, userLogin, userLogout, userProfile } = require('../controllers/user');
const { errorHandler } = require('../middleware')

// instantaite Auth
// const auth = new Auth();

/* GET /register */
router.get('/register', (req, res, next) => {
    res.render('signup');
  });
  
/* POST /register */
router.post('/register', errorHandler(userRegister));

/* GET /login */
router.get('/signin', (req, res, next) => {
res.render('signin');
});

/* POST /login */
router.post('/signin', userLogin);

/* GET /logout */
router.get('/logout', userLogout);

/* GET /profile */
router.post('/profile', (req, res, next) => {
res.render('profile');
});

// router.post('/profile', user);

/* PUT /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
res.send('PUT /profile/:user_id');
});

/* GET /forgot */
router.get('/forgot', (req, res, next) => {
res.send('GET /forgot');
});

/* PUT /forgot */
router.put('/forgot', (req, res, next) => {
res.send('PUT /forgot');
});

/* GET /reset/:token */
router.get('/reset/:token', (req, res, next) => {
res.send('GET /reset/:token');
});

/* PUT /reset/:token */
router.put('/reset/:token', (req, res, next) => {
res.send('PUT /reset/:token');
});
  
module.exports = router;

// authrouter.put('/updateProfile', auth.tokenRequired, aauth.updateUserProfile);

// // Get signUp
// authrouter.get('/signup', (req, res) => {
//     res.render('signUp', { title: "Enoch's Portfolio - SignUp" });
// });

// // Post 
// authrouter.post('/signup', userValidation,  aauth.signup);

// authrouter.get('/signin', (req, res) => {
//     res.render('signIn', { title: "Enoch's Portfolio - SignIn" });
// });

// // authrouter.post('/signin',
// //   passport.authenticate('local-login', { successRedirect: '/auth/profile', failureRedirect: '/auth/SignIn', failureFlash: true })
// // );

// authrouter.get('/profile', (req, res) => {
//     res.render('profile', { title: "Enoch's Portfolio - Profile" });
// });

// authrouter.post('/signout', aauth.logoutUser);



// module.exports = { authrouter };
