const express = require('express');
const mainrouter = express.Router();

/* GET home page. */
mainrouter.get('/', (req, res, next) => {
  res.render('index', { title: "Enoch's Portfolio - Home" });
});

mainrouter.get('/blog', (req, res, next) => {
  res.render('blog-single', { title: "Enoch's Portfolio - Home" });
});




module.exports = { mainrouter }