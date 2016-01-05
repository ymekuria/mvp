var app = angular.module('musicTonight', ['musicTonight.services']);

app.controller('concerts', function($scope,$http){
  $scope.test = 20;
  $scope.events = $http;


})



