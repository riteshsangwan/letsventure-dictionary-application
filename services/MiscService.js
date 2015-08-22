/* jshint camelCase: false */
'use strict';

/**
 * This module acts as a proxy between the external JSON API and the client
 *
 * @author      ritesh
 * @version     1.0
 */

var request = require('request');

 exports.apiHits = function(callback) {
  var options = {
    url: 'http://letsventure.0x10.info/api/dictionary.php',
    qs: {
      type: 'json',
      query: 'api_hits'
    },
    method: 'GET',
    json: true
  };
  request(options, function(error, incomingMessage, body) {
    if(error) {
      return callback(error);
    }
    callback(null, {apiHits: body.api_hits});
  });
 };