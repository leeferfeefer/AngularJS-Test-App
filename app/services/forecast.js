// This is based on codeacademy's tutorial on services for AngularJS
// The endpoint that is used is hosted by them

angular.module('myApp.services', []).

factory('forecast', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
