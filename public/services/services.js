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

appServices.factory('util', ['$log', '$http', '$q', function($log, $http, $q) {
  var service = {};
  var baseUrl = '/api/v1';

  service.makeRequest = function(options) {
    if(options.query) {
      var url = options.url;
      delete options.url;
      options.url = baseUrl + url + '?query=' + options.query.query;
      delete options.query;
    } else {
      var url = options.url;
      delete options.url;
      options.url = baseUrl + url;
    }
    var deferred = $q.defer();
    $http(options).then(function(payload) {
      deferred.resolve(payload.data);
    }, function(reason) {
      $log.error('Error', reason);
      deferred.reject(reason);
    });
    return deferred.promise;
  };

  service.getLetters = function() {
    var deferred = $q.defer();
    $http.get('/data/letters.json').then(function(payload) {
      deferred.resolve(payload.data);
    }, function(reason) {
      $log.error('Error', reason);
      deferred.reject(reason);
    });
    return deferred.promise;
  };

  return service;
}]);

/**
 * Application BookmarkService.
 * This service communicates with backend REST API's
 * All the methods in this service returns a promise.
 * When async opeartion finishes that promise would be resolved or rejected.
 * The promise would be resolved with actual response from Backend API and would be rejected be the reason
 */
appServices.factory('BookmarkService', ['util', function(util) {
  var service = {};

  service.getAll = function() {
    var request = {
      method: 'GET',
      url: '/bookmarks'
    };
    return util.makeRequest(request);
  };

  service.add = function(entity) {
    var request = {
      method: 'POST',
      url: '/bookmarks',
      data: entity
    };
    return util.makeRequest(request);
  };

  service.clear = function() {
    var request = {
      method: 'POST',
      url: '/bookmarks/clear'
    };
    return util.makeRequest(request);
  };

  return service;
}]);

/**
 * Application WordService.
 * This service communicates with backend REST API's
 * All the methods in this service returns a promise.
 * When async opeartion finishes that promise would be resolved or rejected.
 * The promise would be resolved with actual response from Backend API and would be rejected be the reason
 */
appServices.factory('WordService', ['util', function(util) {
  var service = {};

  service.search = function(query) {
    var request = {
      method: 'GET',
      url: '/words',
      query: query
    };
    return util.makeRequest(request);
  };

  return service;
}]);

/**
 * Application MiscService.
 * This service communicates with backend REST API's
 * All the methods in this service returns a promise.
 * When async opeartion finishes that promise would be resolved or rejected.
 * The promise would be resolved with actual response from Backend API and would be rejected be the reason
 */
appServices.factory('MiscService', ['util', function(util) {
  var service = {};

  service.apiHits = function() {
    var request = {
      method: 'GET',
      url: '/apiHits'
    };
    return util.makeRequest(request);
  };

  return service;
}]);