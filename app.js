const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
dotenv = require("dotenv").config();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT;
const Database_url = process.env.DATABASE_URL;
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('flash');
const User = require('./models/user');

// instantiating express class
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// importing routes
const { mainrouter } 	= require('./routes/index');
const auth = require('./routes/auth');
// const reviews = require('./routes/reviews');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// configure express session & passport
// Configure Passport and Sessions
app.use(session({
  secret: 'hang ten dude!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// routes congfiguration
app.use('/', mainrouter);

app.use('/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});

// connecting to mongodb
const mongoose = require('mongoose');
mongoose.connect(Database_url, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
  console.log('we are already connected to the server database');
  app.listen(parseInt(PORT), () => {
    console.log(`This application is already running on port ${PORT}`);
  });
}).catch(err => {
  console.log('could not connect to mongoDB', err)
});






module.exports = app;
  