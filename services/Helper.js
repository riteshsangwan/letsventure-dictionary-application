'use strict';

/**
 * Helper module for the services.
 * This module exports some common validation functions
 */

var _ = require('lodash'),
  errors = require('common-errors');

/**
 * Check if the given value is of string type
 *
 * @param  {Object}       value         value to check
 * @param  {[type]}       name          property name represented by 'value'
 */
exports.checkString = function(value, name) {
  var flag = _.isString(value);
  if(!flag) {
    return new errors.ValidationError(name + ' should be valid string');
  }
};