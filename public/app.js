'use strict';

/**
 * This is the main file. This will bootstrapped the LetsVenture Dictionary angular app and will do the required configuration
 *
 * @author      ritesh
 * @version     1.0
 */


var app = angular.module('dictionaryApp', ['ui.router', 'dictionaryApp.controllers', 'dictionaryApp.services', 'cgNotify']);

/**
 * App configurations goes here
 */
app.config(['$stateProvider', '$urlRouterProvider','$locationProvider', '$compileProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|javascript):/);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'partials/landing.html',
      resolve: {
        apiHits: function(MiscService) {
          return MiscService.apiHits();
        },
        words: function(WordService) {
          return WordService.search({query: 'A'});
        },
        letters: function(util) {
          return util.getLetters();
        },
        data: function(apiHits, words, letters, BookmarkService, $q) {
          var deferred = $q.defer();
          BookmarkService.getAll().then(function(payload) {
            deferred.resolve({
              apiHits: apiHits,
              bookmarks: payload,
              words: words,
              letters: letters
            });
          }, function(reason) {
            deferred.reject(reason);
          });
          return deferred.promise;
        }
      },
      controller: 'LandingController'
    });
}]);

app.run(['$rootScope', '$log', function($rootScope, $log) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    $log.error('State Change Error', error);
  });
}]);