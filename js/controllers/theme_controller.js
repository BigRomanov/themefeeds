app.controller('ThemeCtrl', ['$scope', '$routeParams', '$mdDialog', '$http', 'Theme', function($scope, $routeParams, $mdDialog, $http, Theme) {
  $scope.init = function() {
  	$scope.email = "";
    
    Theme.loadFeeds(1, function(feeds) {
      $scope.feeds = feeds;
      _.each($scope.feeds, function(feed) {
      	feed.selected = true;
      });
    });
  }

  $scope.init();

  $scope.validateEmail = function() {
  	if (!$scope.email) 
  		return false;

  	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test($scope.email);
  }

  $scope.subscribe = function() {
  	var selectedFeeds =  _.filter($scope.feeds, function(feed) {return feed.selected});
  	var ids = _.reduce(selectedFeeds, function(memo, feed){ return memo + feed.Id + ","; }, "");

  	console.log(ids);

  	var req = {
    	method : 'POST',
    	url: 'https://feed2mail.com/be/be.asmx/AddSubscriptions',
    	data: {feedIds: ids, email: $scope.email},
    	headers: {
      	'Accept': 'application/json, text/javascript, */*; q=0.01',
      	'Content-Type': 'application/json; charset=utf-8'
    	}
    };

    $http(req).then(function(res) {
      console.log(res);
			
    }, function(res) {
      console.log("Error retrieving feeds", res);
    });
  }

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
