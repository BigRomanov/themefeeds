var app = angular.module('feedsApp', ['ngRoute', 'ngResource', 'ngCookies', 'ngSanitize', 'ngMessages',
  'ngMaterial', 'contenteditable', 'angularMoment', 'dibari.angular-ellipsis']);

app.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {

    $routeProvider.
    when('/theme/:id', {
      templateUrl: '/views/partials/theme.html',
      controller: 'ThemeCtrl',
      
    }).
    otherwise({
      redirectTo: '/theme/poker'
    });
}]);
// .run(function($rootScope, $location) {

// });
