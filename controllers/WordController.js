'use strict';

/**
 * Word Controller
 *
 * This module expose API's to query a word
 */

var wordService = require('../services/WordService'),
  httpStatus = require('http-status');

/**
 * Query a word
 * Route handler for GET '/api/v1/words'
 *
 * @param  {Object}     req       Express request instance
 * @param  {Object}     res       Express response instance
 * @param  {Function}   next      next function to call next middleware in chain
 */
exports.search = function(req, res, next) {
  wordService.search(req.query, function(err, words) {
    if(err) {
      return next(err);
    }
    req.data = {
      statusCode: httpStatus.OK,
      content: words
    };
    next();
  });
};