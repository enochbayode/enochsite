// const router = require('express').Router();
// const { User } = require("../models/user");
// const joi = require("joi");
// const { Utils } = require('../middleware/utils');

// const utils = new Utils()

// /* GET /signin */
// router.get('/signin', (req, res) => {
//     res.render('signIn', {
//         title:'login page',
//         login : req.flash('loginMessage')
        
//     })
// })

// /* POST /signin */ 
// router.post('/signin', async(req, res) => {
//     try{
//        const { error } = validate(req.body);
//         if (error)
//             return res.status(400).send({ message:error.details[0].message });
            
//             const user = await User.findOne({email: req.body.email});
//             if (!user)
//                 return res.status(401).send({ message:'Invalid Email or Password' })
            
//             const validPassword = await bcrypt.compare(
//                 req.body.password, user.password
//             );  

//             if (!validPassword)
//                 return res.status(401).send({ message:'Invalid Email or Password' })
            
//             const token = user.generateAuthToken();
//             res.status(200).send({ data:token, message:'Logged in successfully' })
//             res.redirect('/auth/profile')

//         }catch (error){
//             res.status(500).send({ message:'Internal Server Error' })
//     }
// })

// const validate = (data) => {
//     const schema = joi.object({ 
//         email:joi.string().required().label('email'),
//         username:joi.string().required().label('username'),
//         password:joi.string().required().label('password'),
//     });

//     return schema.validate(date);
// }



// module.exports = router