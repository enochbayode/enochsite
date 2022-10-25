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





module.exports = { mainrouter }