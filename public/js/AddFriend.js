gentooApp.controller('AddFriendCtrl', function ($scope, $http) {
    $scope.addFriend = function() {
      $http({
        method: 'POST',
            url: 'http://58a85897.ngrok.io/sinovia/friends',
                  //  url: 'https://giftbox-tiy.herokuapp.com/friends',
            headers: {'Authorization': 'sinovia'},
            params: {"requested_friend" : "nastassia"},
      }).success(function successCallback(response) {
              // console.log(response);


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
};
});

gentooApp.controller('AcceptFriendCtrl', function ($scope, $http) {
    $scope.acceptFriend = function() {
      $http({
        method: 'POST',
            url: 'http://58a85897.ngrok.io/sinovia/friends/accept',
                  //  url: 'https://giftbox-tiy.herokuapp.com/friends/accept',
            headers: {'Authorization': 'sinovia'},
            params: {"accepted_friend" : "vega"},
      }).success(function successCallback(response) {
              // console.log(response);


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
};
});
