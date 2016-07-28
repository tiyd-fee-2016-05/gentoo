gentooApp.controller('RequestFriendCtrl', function ($rootScope, $scope, $http, $location, User) {
  $scope.userToken = User.getToken();
  $scope.domain = window.location.href;

  if (!$scope.userToken) {
      $location.path("/sign_up");
  }

  // var rootUrl= "http://6e62d5d1.ngrok.io/";
  var rootUrl= "https://giftbox-tiy.herokuapp.com/";

  var username = $rootScope.username
  var userToken = $scope.userToken

    $scope.requestFriendship = function(mynewfriend) {
      console.log(mynewfriend);
      $http({
        method: 'POST',
            // url: 'http://58a85897.ngrok.io/friends/',
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


gentooApp.controller('AcceptFriendCtrl', function ($rootScope, $scope, $http, $location, User) {
  $scope.userToken = User.getToken();
  $scope.domain = window.location.href;

  if (!$scope.userToken) {
      $location.path("/sign_up");
  }

  // var rootUrl= "http://6e62d5d1.ngrok.io/";
  var rootUrl= "http://giftbox-tiy.herokuapp.com/";

  var username = $rootScope.username
  var userToken = $scope.userToken

    $scope.acceptFriend = function(clickedfriend) {
      console.log(clickedfriend);
      $http({
        method: 'POST',
            // url: 'http://58a85897.ngrok.io/friends/accept',
                   url: 'https://giftbox-tiy.herokuapp.com/friends/accept',
            headers: {'Authorization': userToken},
            params: {"accepted_friend" : clickedfriend},
      }).success(function successCallback(response) {
          $location.path("/friends");;


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
};
});
