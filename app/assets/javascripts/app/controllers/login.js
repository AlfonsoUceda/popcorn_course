'use strict';

angular.module('popcornApp.controllers')
  .controller('LoginController', ['$scope', '$location', 'UserService',
   function ($scope, $location, UserService) {
    UserService.currentUser().then(function(user) {
      console.log(user);
      $scope.user = user;
    });

    $scope.signup = {};
    $scope.login = {};

    $scope.submitSignup = function() {
      UserService.login($scope.signup.email).then(function(user){
        console.log(user);
        $scope.user = user;
      });
    };

    $scope.submitLogin = function() {
      UserService.login($scope.login.email).then(function(user){
        console.log(user);
        $scope.user = user;
      });
    };

    $location.path("/");
  }]);