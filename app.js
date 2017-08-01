var express = require('express'),
  app = express(),
  db = require('./db')
  
var controller = require('./controllers/controller');
app.use('/api', controller);

module.exports = app;
