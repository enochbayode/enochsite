// const router = require('express').Router();
// const { User, validate } = require("../models/user");
// const bcrypt = require('bcrypt');
// const { Utils } = require('../middleware/utils');

// const utils = new Utils();

// /* GET /register */
// router.get('/register', (req, res) => {
//     res.render('signUp');
// });

// router.post('/register', async(req,res) => {

//     // var user =  User();
//     // user.email = req.body.email;
//     // user.username = req.body.username;
//     // user.password = req.body.password;

//     try{
//         const {error} = validate(req.body);
//         if (error)
//             return res.status(400).send({ message:error.details[0].message});

//         const user = await User.findOne({email: req.body.email});
//         // if the user already exist
//         if (user)
//             return res.status(409).send({message: "User with given email already exist"})
        
//         const salt = await bcrypt.genSalt(Number(10));
//         const hashPassword = await bcrypt.hash(req.body.password)

//         await new User({ ...req.body, password:hashPassword }).save();
//         res.status(201).send({message: "User created successfully" })
//         res.redirect('/auth/signin')
        
//         // return res.json({
//         //     status: true,
//         //     message: utils.getMessage("REGISTER_SUCCESS"),
//         //     data: newUser,
//         //   });
        
// console.log('success reg');
//     }catch (error){
//         console.log('errin reg')
//         // res.status(500).send({ message:'Internal Server Error............' })
//         return res.status(500).json({ message: utils.getMessage("UNKNOWN_ERROR") });
//     }
// })

// module.exports = router
