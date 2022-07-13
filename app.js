const express = require('express');
const path = require('path');
dotenv = require("dotenv").config();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT;
const Database_url = process.env.DATABASE_URL;
const nodeMail = require("nodemailer");
const bodyParser = require('body-parser');


// instantiating express class
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// view engine setup ends

// Parse Json data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(function(err, req, res, next) {
// // set locals, only providing error in development
// res.locals.message = err.message;
// res.locals.error = req.app.get('env') === 'development' ? err : {}
// });

app.post('/send', (res,req) => {
  console.log(req.body)
})

// connecting to mongodb database
const mongoose = require('mongoose');
mongoose
  .connect(Database_url, {
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(()=>{
    console.log('This app is connected to the server database');
    app.listen(PORT, () => {
      console.log(`This application is already running on port ${PORT}`);
    });
  })
  .catch(err => {
  console.log('could not connect to mongoDB', err)
});

// mongodb database creation ends

module.exports = { app };

require('./router')(app);

