var portfolioApp = angular.module("portfolioApp", ['ngRoute']);


portfolioApp.config(function($routeProvider) {
  $routeProvider
  //Consumer View Routes
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
