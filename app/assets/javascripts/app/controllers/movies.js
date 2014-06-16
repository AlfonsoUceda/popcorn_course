'use strict';

angular.module('popcornApp.controllers')
  .controller('MoviesController', ['$scope', 'MoviesService', function ($scope, MoviesService) {
    MoviesService.movies().then(function(movies) {
      $scope.movies = movies;
    });

    $scope.addFavorite = function(movie) {
      movie.isFavorite = true;
    };
    $scope.removeFavorite = function(movie) {
      movie.isFavorite = false;
    };
  }])