'use strict';
/**
 * Angularjs services
 *
 * @author      ritesh
 * @version     1.0
 */

var appServices = angular.module('dictionaryApp.services', []);

/**
 * Application WordService.
 * This service communicates with backend REST API's
 * All the methods in this service returns a promise.
 * When async opeartion finishes that promise would be resolved or rejected.
 * The promise would be resolved with actual response from Backend API and would be rejected be the reason
 */
appServices.factory('WordService', ['$log', '$http', '$q', function($log, $http, $q) {
  var service = {};

  return service;
}]);

/**
 * Application BookmarkService.
 * This service communicates with backend REST API's
 * All the methods in this service returns a promise.
 * When async opeartion finishes that promise would be resolved or rejected.
 * The promise would be resolved with actual response from Backend API and would be rejected be the reason
 */
appServices.factory('BookmarkService', ['$log', '$http', '$q', function($log, $http, $q) {
  var service = {};

  return service;
}]);