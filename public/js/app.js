console.log("app.js connected");
>>>>>>> master
var gentooApp = angular.module("gentooApp", ['ngRoute']);
gentooApp.config(function($routeProvider) {
  $routeProvider
  //Consumer View Routes
    .when('/login', {
      templateUrl: 'templates/login.html',
      // controller: 'ReportController'
    })

    .when('/home', {
      templateUrl: 'templates/home.html',
      // controller: 'ReportController'
    })

    .when('/edit-profile', {
      templateUrl: 'templates/profile-edit.html',
      // controller: 'ReportController'
    })

    .when('/friend-profile', {
      templateUrl: 'templates/add-friend.html',
      // controller: 'ReportController'
    })

      .otherwise({
        redirectTo: "/home"
    });
});

var gentooApp = angular.module('gentooApp', []);
gentooApp.controller('FormCtrl', function ($scope, $http) {
  console.log("");

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

  $scope.submitForm = function() {
      console.log("posting data....");
      formData = $scope.form;
      console.log(formData);

      $http.post('http://7c3da702.ngrok.io/users/sign', {headers:{ 'sinovia@gentoo.com': 'password'}
});
};
});

//       ")
//                   $http.post(', {email: "sinovia@gentoo.com", password: "password" })
//                      .success(function (response) {
//                       callback(response);
//                     });
//
// };
// });
