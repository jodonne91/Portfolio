'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/Resume', {
        templateUrl: 'views/resume.html',
        controller: 'AboutCtrl'
      })
      .when('/Home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/Me', {
        templateUrl: 'views/me.html',
        controller: 'MeCtrl'
      })
      .when('/TIY', {
        templateUrl: 'views/tiy.html',
        controller: 'TiyCtrl'
      })
      .when('/Contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/Gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
