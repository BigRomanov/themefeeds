app.controller('ThemeCtrl', ['$scope', '$routeParams', '$mdDialog', 'Theme', function($scope, $routeParams, $mdDialog, Theme) {
  $scope.init = function() {
    $scope.feeds = Theme.feeds;
  }

  $scope.init();

  $scope.showDetails = function(feed, ev) {
    $mdDialog.show({
        controller: DetailsDialogController,
        templateUrl: 'views/dialogs/feed_details_dialog.html',
        // parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {
        	feed: feed
        }
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
  }
}]);

function DetailsDialogController($scope, $mdDialog, feed) {
  $scope.feed = feed;
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
