'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
