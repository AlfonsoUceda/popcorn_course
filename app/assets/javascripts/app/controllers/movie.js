'use strict';

angular.module('popcornApp.controllers')
  .controller('MovieController', ['$scope', 'MoviesService', '$routeParams', '$sce',
   function ($scope, MoviesService, $routeParams, $sce) {
      $scope.movies = MoviesService.movies();
      $scope.movie = _.find($scope.movies,
        function(v) {
          return v.youtubeId == $routeParams.movie_id;
      });
      $scope.movie.youtubeUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.movie.youtubeId + "?rel=0");
    }]);