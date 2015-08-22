'use strict';

/**
 * This is the main file. This will bootstrapped the LetsVenture Dictionary angular app and will do the required configuration
 *
 * @author      ritesh
 * @version     1.0
 */


var app = angular.module('dictionaryApp', ['ui.router', 'dictionaryApp.controllers', 'dictionaryApp.services']);

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
      controller: 'LandingController'
    });
}]);