'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
