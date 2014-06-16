'use strict';

angular.module('popcornApp', [
  'ngRoute',
  'popcornApp.controllers'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/movies.html',
        controller: 'MoviesController'
      })
      .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
  }])
  .controller('MovieController', ['$scope', function ($scope) {
    console.log('MovieController');
  }]);