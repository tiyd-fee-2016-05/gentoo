gentooApp.controller('RequestFriendCtrl', function ($rootScope, $scope, $http, $location, User) {
  $scope.userToken = User.getToken();
  $scope.domain = window.location.href;

  if (!$scope.userToken) {
      $location.path("#/login");
  }

  // var rootUrl= "http://6e62d5d1.ngrok.io/";
  var rootUrl= "https://giftbox-tiy.herokuapp.com/";

  var username = $rootScope.username
  var userToken = $scope.userToken

    $scope.requestFriendship = function(mynewfriend) {
      $http({
        method: 'POST',
            // url: 'https://58a85897.ngrok.io/friends/',
                   url: 'https://giftbox-tiy.herokuapp.com/friends/',
            headers: {'Authorization': userToken},
            params: {"requested_friend" : mynewfriend},
      }).success(function successCallback(response) {
        $location.path("/friends");


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
};
});


gentooApp.controller('FriendRequestCtrl', function ($rootScope, $scope, $http, $location, User) {
  $scope.userToken = User.getToken();
  $scope.domain = window.location.href;
  if (!$scope.userToken) {
      $location.path("#/login");
  }

  // var rootUrl= "https://6e62d5d1.ngrok.io/";
  var rootUrl= "https://giftbox-tiy.herokuapp.com";

  var username = $rootScope.username
  var userToken = $scope.userToken

    $scope.acceptFriend = function(clickedfriend) {
      console.log(clickedfriend);
      $http({
        method: 'POST',
        url: rootUrl + '/friends/accept',
            headers: {'Authorization': userToken},
            params: {"accepted_friend" : clickedfriend},
      }).success(function successCallback(response) {
          $location.path("/friends");


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
};

$scope.denyFriend = function(clickedfriend) {
  console.log(clickedfriend);
  $http({
    method: 'POST',
    url: rootUrl + '/friends/deny',
        headers: {'Authorization': userToken},
        params: {"denied_friend" : clickedfriend},
  }).success(function successCallback(response) {
      $location.path("/friends");


    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
};


});
