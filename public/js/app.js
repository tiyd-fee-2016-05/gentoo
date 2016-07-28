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

gentooApp.controller('VistFriendController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.userToken = User.getToken();
  $scope.domain = window.location.href;

  if (!$scope.userToken) {
      $location.path("/sign_up");
  }

  var rootUrl= "https://giftbox-tiy.herokuapp.com/";

  var username = $rootScope.username
  var userToken = $scope.userToken

  $scope.gotoFriend = function(clickedfriend) {
    console.log(clickedfriend);
    $http({
      method: 'GET',
          url: 'http://58a85897.ngrok.io/friends/',
                //  url: 'https://giftbox-tiy.herokuapp.com/friends/',
          headers: {'Authorization': userToken},
          params: {"username" : clickedfriend},
    }).success(function successCallback(response) {
      $location.path("/friends");


      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  };



     $http.get(url).success( function(data) {
        $scope.reportList = data;
        $scope.whichReport = $routeParams.reportid;
        var thisone = $routeParams.reportid


        console.log(data)
        console.log($scope.whichReport + " is the reportid");
     });
   }]
);
