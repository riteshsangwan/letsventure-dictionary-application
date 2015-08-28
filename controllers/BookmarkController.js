'use strict';

/**
 * Bookmark Controller
 *
 * This module exposes API to add, get, clear and download bookmarks
 *
 * @author      ritesh
 * @version     1.0
 */

var bookmarkService = require('../services/BookmarkService'),
  httpStatus = require('http-status');

/**
 * Get all the bookmarks
 * Route handler for GET '/api/v1/bookmarks'
 *
 * @param  {Object}     req       Express request instance
 * @param  {Object}     res       Express response instance
 * @param  {Function}   next      next function to call next middleware in chain
 */
exports.getAll = function(req, res, next) {
  bookmarkService.getAll(req.ip, function(err, bookmarks) {
    if(err) {
      return next(err);
    }
    req.data = {
      statusCode: httpStatus.OK,
      content: bookmarks
    };
    next();
  });
};

/**
 * Add a bookmark
 * Route handler for POST '/api/v1/bookmarks'
 *
 * @param  {Object}     req       Express request instance
 * @param  {Object}     res       Express response instance
 * @param  {Function}   next      next function to call next middleware in chain
 */
exports.add = function(req, res, next) {
  bookmarkService.create(req.ip, req.body, function(err, bookmark) {
    if(err) {
      return next(err);
    }
    req.data = {
      statusCode: httpStatus.CREATED,
      content: bookmark
    };
    next();
  });
};

/**
 * Clear all the bookmarks
 * Route handler for POST '/api/v1/bookmarks/clear'
 *
 * @param  {Object}     req       Express request instance
 * @param  {Object}     res       Express response instance
 * @param  {Function}   next      next function to call next middleware in chain
 */
exports.clear = function(req, res, next) {
  bookmarkService.clear(req.ip, function(err) {
    if(err) {
      return next(err);
    }
    next();
  });
};


/**
 * Download
 * Route handler for GET '/api/v1/bookmarks/download'
 *
 * @param  {Object}     req       Express request instance
 * @param  {Object}     res       Express response instance
 * @param  {Function}   next      next function to call next middleware in chain
 */
exports.download = function(req, res, next) {
  bookmarkService.download(req.ip, function(err, data) {
    if(err) {
      return next(err);
    }
    res.writeHead(200, {'Content-Type': 'application/pdf'});
    res.write(data);
    res.end();
  });
};