gentooApp.controller('AddFriendCtrl', function ($scope, $http) {
    $scope.addFriend = function() {
      $http({
        method: 'POST',
            url: 'http://58a85897.ngrok.io/sinovia/friends',
            headers: {'Authorization': 'sinovia'},
            params: {"requested_friend" : "nastassia"},
      }).success(function successCallback(response) {
              console.log(response);


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
};
});
