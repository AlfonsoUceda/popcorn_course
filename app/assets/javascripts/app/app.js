'use strict';

angular.module('popcornApp', [
  'ngRoute',
  'ngCookies',
  'popcornApp.controllers',
  'popcornApp.services'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '/templates/login.html',
        controller: 'LoginController'
      })
      .when('/movie/:movie_id', {
        templateUrl: '/templates/movie.html',
        controller: 'MovieController'
      })
      .when('/', {
        templateUrl: '/templates/movies.html',
        controller: 'MoviesController'
      })
      .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
  }]);