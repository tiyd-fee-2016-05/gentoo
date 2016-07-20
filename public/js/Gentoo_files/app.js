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
