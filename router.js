'use strict';

/**
 * Router logic, this class will implement all the API routes
 * i.e, mapping the routes to controller
 *
 * @author      ritesh
 * @version     1.0
 */

var express = require('express');

var wordController = require('./controllers/WordController');
var bookmarkController = require('./controllers/BookmarkController');
var miscController = require('./controllers/MiscController');

module.exports = function() {
  var options = {
    caseSensitive: true
  };

  // Instantiate an isolated express Router instance
  var router = express.Router(options);
  // words
  router.get('/api/v1/words', wordController.search);
  // bookmarks
  router.get('/api/v1/bookmarks', bookmarkController.getAll);
  router.post('/api/v1/bookmarks', bookmarkController.add);
  router.post('/api/v1/bookmarks/clear', bookmarkController.clear);
  router.post('/api/v1/bookmarks/download', bookmarkController.download);
  // miscellaneous
  router.get('/api/v1/apiHits', miscController.apiHits);
  return router;
};