//Loadmy Friends
gentooApp.controller('FriendCtrl', function ($scope, $http) {
      $http({
        method: 'GET',
            url: 'http://58a85897.ngrok.io/sinovia/friends',
              //  url: 'https://giftbox-tiy.herokuapp.com/friends',
            headers: {'Authorization': 'sinovia'},
      }).success(function successCallback(response) {
        $scope.loadedfriendlist= response
              // console.log(response);
              console.log("FriendCtrl successful");

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
});
