var gentooApp = angular.module("mainApp", ['ngRoute']);


gentooApp.config(function($routeProvider) {
  $routeProvider
  //Consumer View Routes
    .when('/home', {
      templateUrl: 'templates/home.html',
      // controller: 'ReportController'
    })
    .when('/add-friend', {
      templateUrl: 'templates/add-friend.html',
      // controller: 'ReportController'
    })

    .when('/login', {
      templateUrl: 'templates/login.html',
      // controller: 'ReportbyDayController'
      })

    .when('/profile-edit', {
      templateUrl: 'templates/profile-edit.html',
      // controller: 'ReportbyDayController'
      })

      .when('/profile', {
        templateUrl: 'templates/profile.html',
        // controller: 'ReportController'
        })

        .when('/add-profile', {
          templateUrl: 'templates/add-profile.html',
          // controller: 'ReportController'
          })
      .otherwise({
        redirectTo: "/home"

    });
});

gentooApp.controller('FormCtrl', function ($scope, $http) {
    $scope.submitForm = function() {
        console.log("posting data....");
        formData = $scope.form;
        console.log(formData);
        $http({
         url: 'http://7c3da702.ngrok.io/test',
         method: "POST",
         data: formData,
         headers: {'Authorization': 'sinovia@gentoo.com'}
     }).success(function (data, status, headers, config) {
             $scope.persons = data;
         }).error(function (data, status, headers, config) {
             $scope.status = status;
         });
    };
 });

 gentooApp.controller('ProfileCtrl', function ($scope, $http) {
     $scope.addProfile = function() {
         console.log("posting data....");
         profileData = $scope.profile;
         console.log(profileData);
  $scope.message="message"

         $http({
          url: 'http://58a85897.ngrok.io/sinovia/profile',
          method: "POST",
          data: profileData,
          headers: {'Authorization': 'sinovia'}
      }).success(function (data, status, headers, config) {
              $scope.persons = data;
          }).error(function (data, status, headers, config) {
              $scope.status = status;
          });

     };

  });

  console.log("admin.js response");
  gentooApp.controller('LoadCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: 'http://58a85897.ngrok.io/sinovia/profile/',
          headers: {'Authorization': 'sinovia'}
    }).success(function successCallback(response) {
            $scope.loadedprofile= response;
              console.log($scope.loadedprofile.user.birthday.day)
              console.log(response)
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  });
