
// const express = require('express')
// const router = express.Router();
// const passport = require ('passport');
// var LocalStrategy = require ('passport-local').Strategy;
// const User = require('../model/users');

// //serialize and desirialize

// passport.serializeUser(function(user, done){
//   done(null, user._id);
// });


// passport.deserializeUser(function(id, done){
//   User.findById(id, function(err,user){
//       done(err,user);
//   })
// });




// passport.use('local-login', new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback:true

// }, function(req, email, password, done){
//     User.findOne({email:req.body.email}, function(err,user){

//         if(err) return done(err);

//         if(!user){
//             return done(null, false, req.flash('loginMessage', 'Incorrect username or password!'));
//         }
//         if(!user.comparePassword(password)){
//             return done(null, false, req.flash('loginMessage', 'Incorrect username or password!'));
//         }
//         return done(null, user);
//     })
// }))






//   module.exports = router;

