'use strict';

/**
 * Angular application controllers
 *
 * @author      ritesh
 * @version     1.0
 */

var appControllers = angular.module('dictionaryApp.controllers', ['dictionaryApp.services']);

appControllers.controller('LandingController', ['$scope', 'data', 'WordService', 'BookmarkService', function($scope, data, WordService, BookmarkService) {
  $scope.currentLetter = 'A';
  $scope.wordSelected = false;
  $scope.usage = data.apiHits;
  $scope.bookmarks = data.bookmarks;
  $scope.words = data.words;
  $scope.letters = data.letters;

  $scope.selectWord = function(word) {
    $scope.selectedWord = word;
    $scope.wordSelected = true;
  };

  $scope.nextPage = function(letter) {
    $scope.currentLetter = letter;
    WordService.search({query: letter}).then(function(words) {
      $scope.words = words;
    });
  };

  $scope.checkWord = function(word) {
    return $scope.selectedWord === word;
  };

  $scope.clearBookmarks = function() {
    BookmarkService.clear().then(function() {

    });
  };
}]);