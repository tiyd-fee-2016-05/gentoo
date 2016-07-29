var gentooApp = angular.module("mainApp", ['ngRoute', 'firebase']);
gentooApp.config(function($routeProvider) {
  $routeProvider
  //Consumer View Routes
    .when('/home', {
      templateUrl: 'templates/home.html',
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

        .when('/add-friend', {
          templateUrl: 'templates/add-friend.html',
          // controller: 'ReportController'
        })

        .when('/friend-profile', {
          templateUrl: 'templates/friend-profile.html',
          // controller: 'ReportController'
        })

        .when('/add-profile', {
          templateUrl: 'templates/add-profile.html',
          // controller: 'ReportController'
          })

          .when('/new-profile', {
            templateUrl: 'templates/new-profile.html',
            // controller: 'ReportController'
            })

          .when('/friends', {
            templateUrl: 'templates/friends.html',
            // controller: 'ReportController'
            })

          .when('/sign-up', {
            templateUrl: 'templates/sign-up.html',
            // controller: 'ReportController'
            })
            .when('/list-item', {
              templateUrl: 'templates/list-item.html',
              // controller: 'ReportController'
              })

              .when('/new-profile', {
                templateUrl: 'templates/new-profile.html',
                // controller: 'ReportController'
                })

      .otherwise({
        redirectTo: "/login"

    });
});
