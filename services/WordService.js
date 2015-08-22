'use strict';

/**
 * This module acts as a proxy between the external JSON API and the client
 *
 * @author      ritesh
 * @version     1.0
 */

var errors = require('common-errors'),
  request = require('request');

/**
 * Searches for the given word
 *
 * @param  {Object}       query         client query object
 * @param  {Function}     callback      callback function
 */
exports.search = function(query, callback) {
  if(!query || !query.query) {
    return callback(new errors.ValidationError('Query cannot be null or empty'));
  }
  var options = {
    url: 'http://letsventure.0x10.info/api/dictionary.php',
    qs: {
      type: 'json',
      query: query.query
    },
    method: 'GET',
    json: true
  };
  request(options, function(error, incomingMessage, body) {
    callback(error, body);
  });
};
