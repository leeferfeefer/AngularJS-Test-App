
angular.module('myApp.controllers', []).

controller('MainController', function($scope, forecast) {
  $scope.title = 'Herro preeeeee';

  forecast.success(function(data) {
    $scope.forecast = data;
  });



});
