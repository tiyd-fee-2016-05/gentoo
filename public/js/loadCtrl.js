console.log("LoadCtrl.js response");
gentooApp.controller('LoadCtrl', function ($scope, $http) {

  $http({
    method: 'GET',
        url: 'http://58a85897.ngrok.io/sinovia/profile',
        headers: {'Authorization': 'sinovia'}
  }).success(function successCallback(response) {

          $scope.loadedprofile= response;


    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
});
