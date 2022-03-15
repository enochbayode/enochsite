// importing the required modules
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const { Auth } = require("../middlewares/auth");
const { Utils } = require("../middlewares/utils");
const { Storage } = require("../middlewares/storage");
const mongoose = require("mongoose");
const securePassword = require("../middlewares/securePassword");

// instantiating the middlewares
const utils = new Utils();
const auth = new Auth(); 
const storage = new Storage();

// instatiating image upload handler
const upload = storage.upload.single("profileImg");

const updateUserProfile = async (req, res) => {
  upload(req, res, async (err) => {
    var error;

    if (err) {
      error = "IMAGE_UPLOAD_ERROR";
      res.status(400).json({
        status: false,
        message: "You've got some errors.",
        error: utils.getMessage(error),
      });
      return;
    }

    const body = req.body;
    const user = req.user;

    if (utils.isEmpty(body)) {
      storage.deleteImage(req.file);
      error = "UPDATE_DATA_ERROR";
      res.status(400).json({
        status: false,
        message: "You've got some errors.",
        error: utils.getMessage(error),
      });
      return;
    }

    if (body.email) {
      var eMail = await User.findOne({ email: body.email.toLowerCase() }); //existing email
    }

    eMail ? (eMail = String(eMail._id) === String(user._id)) : (eMail = true);

    if (!eMail) {
      storage.deleteImage(req.file);
      eMail ? (error = "EMAIL_DUPLICATE_ERROR") : "";

      res.status(400).json({
        status: false,
        message: "You've got some errors.",
        error: utils.getMessage(error),
      });
      return;
    }

    if (body.email) {
      body.email = body.email.toLowerCase();
    }

    if (req.file) {
      body.profileImg = process.env.Storage_URL + req.file.filename;
    }

    try {
      const userUpdatedInfo = await User.findByIdAndUpdate(user._id, body, {
        new: true,
      }).select("-password");

      var token = auth.generateAuthToken(userUpdatedInfo);

      // returning response
      res.status(201).json({
        status: true,
        message: utils.getMessage("ACCOUNT_UPDATE_SUCCESS"),
        data: userUpdatedInfo,
        token: token,
      });
      return;
    } catch (error) {
      storage.deleteImage(req.file);
      error = "UNKNOWN_ERROR";
      res.status(500).json({
        status: false,
        message: "You've got some errors.",
        error: utils.getMessage(error),
      });
      return;
    }
  });
};

const signup = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      res.status(403);
      return res.json({
        status:false,
        error: utils.getMessage("ACCOUNT_EXISTS_ERROR"),
      });
    }
    const hashedPassword = await securePassword(req.body.password);

    // let birthday = new Date(req.body.birthday);
    // let ofAge = (new Date() - birthday) / 31536000000 >= 18;
    // if (!ofAge) {
    //   return res.status(400).json({
    //     status:false,
    //     error: utils.getMessage("AGE_ERROR"),
    //   });
    // }

    const newUser = await User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    }).save();
    newUser.set("password", undefined);
    if (newUser) {
      res.status(201);
      res.redirect('/auth/signin')
      return res.json({
        status: true,
        message: utils.getMessage("REGISTER_SUCCESS"),
        data: newUser,
      });
    }
    return res.json({
      status: false,
      message: "unable to register user",
      error: utils.getMessage("REGISTER_FAILURE"),
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Unable to register user.",
      error: utils.getMessage("UNKNOWN_ERROR"),
    });
  }


};

const signin = async (req, res) => {

}

const logoutUser = async (req, res) => {
  req.user = null;
  res.redirect('/auth/signin')
  res.status(200).json({
    status: true,
    message: utils.getMessage("LOGOUT_SUCCESS"),
    data: {},
  });
  return;
};



// exporting the controllers
module.exports = {
  updateUserProfile,
  logoutUser,
  signup
};