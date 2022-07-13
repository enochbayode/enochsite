// importing the required modules
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
// const { Mail } = require('./mail');
const { Utils } = require('./utils');

// const mail = new Mail();
const utils = new Utils();

class Auth {
  constructor() {
    this.alg = 'HS256';
  }

  /**
   *
   * @param {*} req request object
   * @param {*} res response object
   * @param {*} next next function
   * @returns the user object appended to the request object if the user is authenticated
   */
  async tokenRequired(req, res, next) {
    if (!req.headers.ayanke_access_token) {
      const error = 'TOKEN_ERROR';
      // console.log(error)
      res.status(401).json({
        status: false,
        message: "You've got some errors.",
        error: utils.getMessage("UNKNOWN_ERROR"),
      });
      return;
    }
    const token = req.headers.ayanke_access_token;

    try {
      const data = jwt.verify(token, process.env.SECRET_KEY, {
        algorithms: process.env.ALGO,
      });

      if (!data) {
        const error = 'TOKEN_ERROR';
        res.status(401).json({
          status: false,
          message: "You've got some errors.",
          error: utils.getErrorMessage(error),
        });
        return;
      }

      const user = await User.findById(data._id);

      if (!user) {
        const error = 'INVALID_TOKEN_ERROR';
        res.status(401).json({
          status: false,
          message: "You've got some errors.",
          errors: utils.getErrorMessage(error),
        });
        return;
      }

      if (!user.isActive) {
        const error = 'ACCOUNT_DISABLED';
        res.status(403).json({
          status: false,
          message: "You've got some errors.",
          errors: utils.getErrorMessage(error),
        });
        return;
      }

      req.user = {
        _id: user._id,
        email: user.email,
        name: user.name,
        password: user.password,
      };
      next();
    } catch (error) {
      error = 'INVALID_TOKEN_ERROR';
      res.status(401).json({
        status: false,
        message: "You've got some errors.",
        errors: utils.getErrorMessage(error)
      });
      return;
    }
  }

  /**
   *
   * @param {*} user a mongoose or JSON user object
   * @param {*} type either 'email' for email verfication or 'recovery' for password recovery
   * @param {*} length length of the otp to be generated (default is 6)
   * @returns the generated otp as well as send a mail to the user
   */
  async generateOTP(user, type, length = 5) {
    const otp = (Math.random() * 2).toString().slice(2, length + 2);

    var dup = await User.findOne({ otp: otp });

    if (dup) {
      await this.generateOTP();
    } else {
      user.otp = otp;
      user.otpTime = new Date();
      const status = await user.save();

      if (type === 'recovery') {
        mail.mailRecoveryOTP(user, status.otp);
        return otp;
      } else if (type === 'email') {
        mail.mailEmailVerificationOTP(user, status.otp);
        return otp;
      }
    }
  }

  /**
   *
   * @param {*} user a mongoose or JSON user object
   * @returns the generated JWT
   */
  generateAuthToken(user) {
    var tokenData = {
      _id: user._id,
      email: user.email,
    };
    return jwt.sign(tokenData, process.env.SECRET_KEY, {
      algorithm: this.alg,
    });
  }
}

module.exports = {
  Auth
};
