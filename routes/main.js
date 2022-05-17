const express = require('express');
const mainrouter = express.Router();
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");

/* GET home page. */
mainrouter.get('/', (req, res, next) => {
  res.render('index', { title: "Enoch's Portfolio - Home" });
});

mainrouter.get('/blog', (req, res, next) => {
  res.render('blog-single', { title: "Enoch's Portfolio - Blog single" });
});

mainrouter.get('/portfolio-details', (req, res, next) => {
  res.render('portfolio-details', {title: "Enoch's Portfolio - Portfolio details" })
});

// const transporter = nodemailer.createTransport({
//   host: 'smtp-mail.outlook.com',
//   port: 587,
//   secure:false,
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// // verify connection configuration
// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });

// mainrouter.post("/send", (req, res) => {
//   let form = new multiparty.Form();
//   let data = {};
//   form.parse(req, function (err, fields) {
//     Object.keys(fields).forEach(function (property) {
//       data[property] = fields[property].toString();
//     });
//     // console.log(data);
//     const mail = {
//       sender: `${data.name} <${data.email}>`,
//       to: process.env.EMAIL_USERNAME, // receiver email,
//       subject: data.subject,
//       text: `${data.name} <${data.email}> \n${data.message}`,
//     };
//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Something went wrong.");
//       } else {
//         res.status(200).send("Email successfully sent to recipient!");
//       }
//     });
//   });
// });

// //Index page (static HTML)
// mainrouter.route("/").get(function (req, res) {
//   res.sendFile(process.cwd() + "/views/index");
// });





module.exports = { mainrouter }