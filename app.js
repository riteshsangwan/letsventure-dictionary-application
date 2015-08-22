'use strict';

/**
 * Application start up script
 *
 * @author      ritesh
 * @version     1.0
 */

/* Globals */
var express = require('express'),
  config = require('config'),
  logger = require('./logger').getLogger(),
  router = require('./router'),
  path = require('path'),
  app = express();

var errorHandler = require('./middlewares/ErrorHandler'),
  responser = require('./middlewares/Responser'),
  responseTransformer = require('./middlewares/ResponseTransformer'),
  port = process.env.PORT || config.WEB_SERVER_PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var bodyParser = require('body-parser');
app.enable('trust proxy');
// only use bodyParser for json and urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
// init application routes
app.use(router());
app.use(responseTransformer());
// use responser
app.use(responser());
// use global error handler
app.use(errorHandler());
/**
 * Configuring root path
 */
app.get('/', function(req, res) {
  res.render('index', {
    title : 'LetsVenture Dictionary Application'
  });
});
// start the application
app.listen(port);
logger.info('App started on port', port);