gentooApp.controller('LoadCtrl', function ($scope, $http) {
  localStorage.setItem('user', JSON.stringify({
      username: 'sinovia',
      api_key: 'password'
  }));

  var user = JSON.parse(localStorage.getItem('user'));

      $http({
        method: 'GET',
            url: url + 'sinovia/profile',
            // url:'https://giftbox-tiy.herokuapp.com/profile',
            headers: {'Authorization': 'sinovia'},
      }).success(function successCallback(response) {
              // console.log(response);
              $scope.loadedprofile=response;


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

        $http({
          method: 'GET',
              url: 'http://58a85897.ngrok.io/sinovia/friends',
              // url: 'https://giftbox-tiy.herokuapp.com/friends',
              headers: {'Authorization': 'sinovia'},
        }).success(function successCallback(response) {
                // console.log(response);
                $scope.loadedfriends=response;


          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });

});
