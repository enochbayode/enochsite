// // const passportLocal = require('passport');
// const passport = require('passport');
// const express = require('express');
// const router = express.Router();
// const flash = require('flash');
// const User = require('../models/user');


// //creating a user 
// router.post('/createUser', (req,res, next)=>{
//     var user = new User();

//     user.email = req.body.email;
//     user.username = req.body.username;
//     user.password = req.body.password;
    
//     User.findOne({email:req.body.email}, (err,existinguser)=>{
//         if(existinguser){
//             req.flash('error', 'Account with this email already exists');
//             return res.redirect('/auth/createUser') 
//         }else{
//             user.save(function(err,user){
//                 if(err) return next(err);
//                 req.flash('message', 'Successful login!!'); 
//                     req.login(user,function(err){
//                         if(err) return next(err);
//                         res.redirect('/auth/signin');
//                     })
//             }) 
//         } 
//     })


// });




// function isAuthenticated(req, res, next) {

//     if (req.user)
//         return next();
  
//     res.redirect('/auth/signin');
//   }

//   router.get('/signin',(req,res)=>{
//     res.render('signIn', {
//         title:'login page',
//         login : req.flash('loginMessage')
        
//     })
// });

// router.get('/signup',(req,res)=>{
//     res.render('signUp', {
//         title:'SignUp page',
//         error: req.flash('error')
//     })
// } )



// router.get('/profile',isAuthenticated,  (req,res)=>{

//     res.render('profile', {
//         title : 'profile',
//         user: req.user,
//         message:req.flash('message')
        
//     })

// })

// //login in user
// router.post('/Signin',
//   passport.authenticate('local-login',
//    { successRedirect: '/auth/profile',
//     failureRedirect: '/auth/signin',
//     failureFlash: true })
// );

// router.get('/signout', (req,res)=>{
//     req.logout();
//     res.redirect('/auth/signin')
// })




// module.exports = router