var gentooApp = angular.module("gentooApp", ['ngRoute']);
gentooApp.config(function($routeProvider) {
  $routeProvider
  //Consumer View Routes
    .when('/login', {
      templateUrl: 'templates/login.html',
      // controller: 'ReportController'
    })

    .when('/login', {
      templateUrl: 'templates/login.html',
      // controller: 'ReportController'
    })

    .when('/landing', {
      templateUrl: 'templates/landing.html',
      // controller: 'ReportController'
    })

      .otherwise({
        redirectTo: "/landing"

    });
});

var gentooApp = angular.module('gentooApp', []);
gentooApp.controller('FormCtrl', function ($scope, $http) {

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
