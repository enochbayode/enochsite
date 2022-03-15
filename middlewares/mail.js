// importing the required modules
const { Nodemailing } = require('nodemailing');
const nodemailer = require('nodemailer');
const path = require('path');

class Mail {
  constructor() {
    this.username = process.env.EMAIL_USERNAME;
    this.password = process.env.EMAIL_PASSWORD;
    this.host = process.env.EMAIL_HOST;

    // computing the path to the email HTML files
    this.aco = path.join(__dirname, '../mails/aco.html');
    this.agco = path.join(__dirname, '../mails/agco.html');
    this.uco = path.join(__dirname, '../mails/uco.html');

    this.transporter = nodemailer.createTransport({
      host: this.host,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: this.username,
        pass: this.password,
      },
    });
  }

  /**
   *
   * @param {*} user user object
   * @param {*} otp generated One Time Password
   * @returns send a mail verification OTP to the user's email
   */
  async mailEmailVerificationOTP(user, otp) {
    // computing the email object
    const msg = {
      to: user.email,
      from: {
        name: 'Travella Support',
        address: this.username,
      },
      subject: `OTP To Complete Email Verification`,
      html: `<p>Hello ${user.firstName},</p><p>As requested, find below your OTP to complete your email verification on Travella.</p><p>${otp}</p> <br /> <p>Do ensure not to share this OTP with anyone.</p>`,
    };

    // sending the mail
    return new Promise((resolve, reject) => {
      this.transporter
        .sendMail(msg)
        .then((status) => {
          resolve(status);
        })
        .catch((error) => {
          reject(error);
          return;
        });
    });
  }

  /**
   *
   * @param {*} user user object
   * @param {*} otp generated One Time Password
   * @returns sends a password recovery OTP to the user's email
   */
  async mailRecoveryOTP(user, otp) {
    // computing the email object
    const msg = {
      to: user.email,
      from: {
        name: 'Travella Support',
        address: this.username,
      },
      subject: `OTP To Complete Password Recovery`,
      html: `<p>Hello ${user.firstName},</p><p>As requested, find below your OTP to complete your password recovery on Travella.</p><p>${otp}</p> <br /> <p>Do ensure not to share this OTP with anyone.</p>`,
    };

    // sending the mail
    return new Promise((resolve, reject) => {
      this.transporter
        .sendMail(msg)
        .then((status) => {
          resolve(status);
        })
        .catch((error) => {
          reject(error);
          return;
        });
    });
  }
}

module.exports = { Mail };
