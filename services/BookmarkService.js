'use strict';

/**
 * This module is a contract between the bookmarks documents and the REST API ENDPOINTS
 *
 * @author      ritesh
 * @version     1.0
 */

var BookmarkSchema = require('../models/Bookmark').BookmarkSchema,
  config = require('config'),
  db = require('../datasource').getDb(config.MONGODB_URL),
  helper = require('./Helper'),
  async = require('async'),
  Bookmark = db.model('Bookmark', BookmarkSchema);

/**
 * Validate the entity and callback
 * validation is required before persisting the entity
 *
 * @param  {String}       ipAddress     IP Address from which the request is coming from
 * @param  {Object}       entity        entity to validate
 * @param  {Function}     callback      callback function
 */
var _validate = function(ipAddress, entity, callback) {
  var error = helper.checkString(ipAddress, 'IP Address');
  error = error || helper.checkString(entity.word, 'Word') || helper.checkString(entity.description, 'Description') || helper.checkString(entity.audioUrl, 'Audio URL');
  callback(error);
};

/**
 * Get all the bookmarks
 *
 * @param  {Function}     callback      callback function
 */
exports.getAll = function(ipAddress, callback) {
  Bookmark.find({ipAddress: ipAddress}, callback);
};

/**
 * Add a bookmark
 *
 * @param  {Object}       entity        entity to add as a bookmark
 * @param  {Function}     callback      callback function
 */
exports.create = function(ipAddress, entity, callback) {
  async.waterfall([
    function(cb) {
      _validate(ipAddress, entity, cb);
    },
    function(cb) {
      entity.ipAddress = ipAddress;
      Bookmark.create(entity, cb);
    }
  ], callback);
};

/**
 * Clears all the bookmarks for a specific IP address
 *
 * @param  {Function}     callback      callback function
 */
exports.clear = function(ipAddress, callback) {
  Bookmark.find({ipAddress: ipAddress}).remove(callback);
};

/**
 * Download all the bookmarks for a specific IP address
 *
 * @param  {Object}       entity        entity to add as a bookmark
 * @param  {Function}     callback      callback function
 */
exports.download = function(ipAddress, callback) {

};