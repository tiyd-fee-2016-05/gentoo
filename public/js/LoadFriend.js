gentooApp.controller('LoadFriendController', ['$rootScope', '$scope', '$http', '$location', 'User', 'Friend', function($rootScope, $scope, $http, $location, User, Friend) {
    $scope.userToken = User.getToken();
    $scope.friendtoLoad = Friend.getFriend();
console.log($scope.friendtoLoad);
  console.log($scope.userToken);

  var usersearch = $scope.friendtoLoad




    var rootUrl = "https://6e62d5d1.ngrok.io/";
    // var rootUrl= "https://giftbox-tiy.herokuapp.com/";

    console.log($scope.userToken);
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
        console.log(data);
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
                   console.log("Wishlist Info for " + $rootScope.username);
                   console.log(data);
                   $rootScope.wishlistArray = data.user
                  console.log("List of Lists");
                   console.log($rootScope.wishlistArray);
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });//End GET request for friends





}]);
