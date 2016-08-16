gentooApp.controller('RequestFriendCtrl', function ($rootScope, $scope, $http, $location, User) {
  $scope.userToken = User.getToken();
  $scope.domain = window.location.href;

  if (!$scope.userToken) {
      $location.path("#/login");
  }

  // var rootUrl= "http://fa02cf67.ngrok.io/";
  var rootUrl= "https://giftbox-tiy.herokuapp.com/";

  var username = $rootScope.username
  var userToken = $scope.userToken

    $scope.requestFriendship = function(mynewfriend) {
      console.log(mynewfriend);
      $http({
        method: 'POST',
            url: 'http://fa02cf67.ngrok.io/friends/',
                  //  url: 'https://giftbox-tiy.herokuapp.com/friends/',
    headers: {'Authorization': User.getToken()},
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

  // var rootUrl= "https://fa02cf67.ngrok.io/";
  var rootUrl= "https://giftbox-tiy.herokuapp.com";

  var username = $rootScope.username
  var userToken = $scope.userToken

    $scope.acceptFriend = function(clickedfriend) {
      console.log(clickedfriend);
      $http({
        method: 'POST',
        url: rootUrl + '/friends/accept',
    headers: {'Authorization': User.getToken()},
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
    headers: {'Authorization': User.getToken()},
        params: {"denied_friend" : clickedfriend},
  }).success(function successCallback(response) {
      $location.path("/friends");


    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
};


});
