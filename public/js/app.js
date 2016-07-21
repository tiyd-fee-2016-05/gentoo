var gentooApp = angular.module("mainApp", ['ngRoute']);
var url = "http://58a85897.ngrok.io/";
var username = $('.userlogin[name="login_username"]').val()
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

          .when('/sign-up', {
            templateUrl: 'templates/sign-up.html',
            // controller: 'ReportController'
            })
      .otherwise({
        redirectTo: "/home"

    });
});
