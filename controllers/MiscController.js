'use strict';

/**
 * Miscellaneous controller
 *
 * @author      ritesh
 * @version     1.0
 */

var miscService = require('../services/MiscService'),
  httpStatus = require('http-status');


/**
 * Returns the total api hits
 * Route handler for GET '/api/v1/apiHits'
 *
 * @param  {Object}     req       Express request instance
 * @param  {Object}     res       Express response instance
 * @param  {Function}   next      next function to call next middleware in chain
 */
exports.apiHits = function(req, res, next) {
  miscService.apiHits(function(err, hits) {
    if(err) {
      return next(err);
    }
    req.data = {
      statusCode: httpStatus.OK,
      content: hits
    };
    next();
  });
};