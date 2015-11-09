app.controller('ThemeCtrl', ['$scope', '$routeParams', 'Theme', function($scope, $routeParams, Theme) {
  	$scope.init = function() {
  		$scope.feeds = Theme.feeds;
  	}

  	$scope.init();
}]);