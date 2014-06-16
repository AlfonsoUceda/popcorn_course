'use strict';

angular.module('popcornApp', [
  'ngRoute',
  'popcornApp.controllers',
  'popcornApp.services'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
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