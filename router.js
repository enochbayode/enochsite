const { mainrouter } 	= require('./routes/main');
const { authrouter } = require('./routes/auth');

module.exports = (app) => {
  app.use('/', mainrouter);

  app.use('/auth', authrouter);

  // 404 Error Handler
  app.all('*', (req, res) => {
    res.status(404).json({
      status: false,
      error: 'And Just Like That, You Completely Lost Your Way 😥',
    });
  });
};
