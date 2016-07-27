gentooApp.controller('HomeController', ['$rootScope', '$scope', '$http', '$location', 'User', function($rootScope, $scope, $http, $location, User) {
    $scope.userToken = User.getToken();
    $scope.domain = window.location.href;

    if (!$scope.userToken) {
        $location.path("/sign_up");
    }

    // var rootUrl= "http://6e62d5d1.ngrok.io/";
    var rootUrl= "http://giftbox-tiy.herokuapp.com/";

console.log($scope.userToken);
console.log($rootScope.username);
var username = $rootScope.username
var userToken = $scope.userToken
    // $http({
    //           url:  rootUrl + "/friends",
    //        method: "GET",
    //        headers: {'Authorization': userToken},
    //       //  params: {formData}
    //      }).success(function (data, status, headers, config) {
    //               console.log("Friend Info for " + username);
    //               console.log(data);
    //        $rootScope.friendDetails = data
    //       $rootScope.friendList = data.user.friends
    //        $rootScope.friendRequests = data.user.requested_friendships
    //               console.log("Friend Requests for " + username);
    //               console.log("Number of Requests: " + $rootScope.friendDetails.user.requested_count);
    //        }).error(function (data, status, headers, config) {
    //            $scope.status = status;
    //        });//End GET request for friends
    //
    //
    //
    //
    //
    $http({
              url:  rootUrl + "profile",
           method: "GET",
           headers: {'Authorization': userToken},
       }).success(function (data, status, headers, config) {
         console.log("Profile Information for " + username);
         console.log(data);
             $rootScope.loadedprofile= data;
             $rootScope.holidayList = data.user.holidays
             $rootScope.interestList = data.user.interests
              $rootScope.colorList = data.user.colors

         window.location = "#/home";
           }).error(function (data, status, headers, config) {
               $scope.status = status;
           });//End GET request for profile info
    //
    //
    $http({
              url:  rootUrl + "wishlists",
           method: "GET",
           headers: {'Authorization': userToken},
           //  params: {formData}
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
