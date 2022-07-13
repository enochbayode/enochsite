// // importing the required modules
// const { Nodemailing } = require('nodemailing');
// const nodemailer = require('nodemailer');
// const path = require('path');

// class Mail {
//   constructor() {
//     this.username = process.env.EMAIL_USERNAME;
//     this.password = process.env.EMAIL_PASSWORD;
//     this.host = process.env.EMAIL_HOST;

//     // computing the path to the email HTML files
//     this.aco = path.join(__dirname, '../mails/aco.html');
//     this.agco = path.join(__dirname, '../mails/agco.html');
//     this.uco = path.join(__dirname, '../mails/uco.html');

//     this.transporter = nodemailer.createTransport({
//       host: this.host,
//       port: 465,
//       secure: true, // true for 465, false for other ports
//       auth: {
//         user: this.username,
//         pass: this.password,
//       },
//       tls: {
//         // do not fail on invalid certs
//         rejectUnauthorized: false,
//       },

//       // verify connection configuration
//       // this.transporter.verify(function (error, success) {
//       //   if (error) {
//       //     console.log(error);
//       //   } else {
//       //     console.log("Server is ready to take our messages");
//       //   }
//       // });

//     })
//     .verify(function (error, success) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("Server is ready to take our messages");
//         }
//       });

//   }

// }


// module.exports = { Mail };
