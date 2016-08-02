gentooApp.controller('LoadFriendController', ['$rootScope', '$scope', '$http', '$location', 'User', 'Friend', function($rootScope, $scope, $http, $location, User, Friend) {
    $scope.userToken = User.getToken();
    $scope.friendtoLoad = Friend.getFriend();


  var usersearch = $scope.friendtoLoad


  $(document).ready(function(){
      $(this).scrollTop(0);
  });

    // var rootUrl = "https://6e62d5d1.ngrok.io/";
    var rootUrl= "https://giftbox-tiy.herokuapp.com/";


    var userToken = $scope.userToken

    $http({
        url: rootUrl + usersearch + "/profile",
        method: "GET",
        headers: {
            'Authorization': userToken
        },
        data: {
            username: usersearch
        }
    }).success(function(data, status, headers, config) {

        $rootScope.loadedprofile= data;
        // $rootScope.holidayList = data.user.holidays
        // $rootScope.interestList = data.user.interests
        //  $rootScope.colorList = data.user.colors

    }).error(function(data, status, headers, config) {
        $scope.status = status;
    }); //End GET request for profile info
    //
    // //
    $http({
              url:  rootUrl +usersearch + "/wishlists",
           method: "GET",
           headers: {'Authorization': userToken},
           data: {
               username: usersearch
             }
          }).success(function (data, status, headers, config) {

                   $rootScope.wishlistArray = data.user

            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });//End GET request for friends

            $http({
                      url:  rootUrl +usersearch + "/ideabox",
                   method: "GET",
                   headers: {'Authorization': userToken},
                   data: {
                       username: usersearch
                     }
                  }).success(function (data, status, headers, config) {
                    }).error(function (data, status, headers, config) {
                        $scope.status = status;
                    });//End GET request for friends





}]);
