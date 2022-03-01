const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const PORT = process.env.port;
const Database_url = process.env.Database_url;
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const User = require('./models/user');

// importing routes
const index 	= require('./routes/index');
const auth 	= require('./controller/auth');
// const reviews = require('./routes/reviews');

// instantiating express class
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// configure express session & passport
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
    // store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));

// routes congfiguration
app.use('/', index);
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
// useFindAndModify set to false
// mongoose.set('useFindAndModify', false);
// use create index set to true
// mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb+srv://Enoch:12345@data-set.mg3im.mongodb.net/Database?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
  console.log('we are already connected to the server database');
  app.listen(5500, () => {
    console.log("This application is already running on port " , PORT);
  });
}).catch(err => {
  console.log('could not connect to mongoDB', err)
})



module.exports = app;
  