const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const UserSchema = new Schema({
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },

    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        unique:true,
        lowercase:true,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    profileImg: {
        type: String,
        default:
          "https://emmyh-coin.appspot.com.storage.googleapis.com/6d85b1e5-1307-4365-a4ab-4e44c319bdad.png",
    },

});


module.exports = mongoose.model('user', UserSchema);
// module.exports = { User }