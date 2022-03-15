const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema =  mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required: true
    },

    username:{
        type:String,
        required: true
    },

    password:{
        type:String,
        required: true
    },

    profileImg: {
        type: String,
        default:
          "https://emmyh-coin.appspot.com.storage.googleapis.com/6d85b1e5-1307-4365-a4ab-4e44c319bdad.png",
    },

});




// UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("user", UserSchema);

module.exports = { User };