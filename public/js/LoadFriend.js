gentooApp.controller('LoadFriendController', ['$rootScope', '$scope', '$http', '$location', 'User', 'Friend', function($rootScope, $scope, $http, $location, User, Friend) {
    $scope.userToken = User.getToken();
    $scope.friendtoLoad = Friend.getFriend();
      $scope.nonfriendtoLoad = Friend.getNonFriend();

    if (!$scope.userToken) {
        $location.path("#/login");
    }


    var usersearch = $scope.friendtoLoad
    var nonfriendsearch = $scope.nonfriendtoLoad
    console.log(usersearch);


    $(document).ready(function() {
        $(this).scrollTop(0);
    });

    // var rootUrl = "https://fa02cf67.ngrok.io/";
    var rootUrl = "https://giftbox-tiy.herokuapp.com/";


    var userToken = $scope.userToken
    if (!$scope.userToken) {
        $location.path("#/login");
    }
    $http({
        url: rootUrl + usersearch + "/profile",
        method: "GET",
        headers: {
            'Authorization': userToken
        },
    }).success(function(data, status, headers, config) {

        $rootScope.loadedfriend = data;
        $rootScope.friendholidayList = data.user.holidays
        $rootScope.friendinterestList = data.user.interests
        $rootScope.friendfavoriteList = data.user.favorites

    }).error(function(data, status, headers, config) {
        $scope.status = status;
    }); //End GET request for profile info

    $http({
        url: rootUrl + "users/" + nonfriendsearch,
        method: "GET",
        headers: {'Authorization': User.getToken()},
    }).success(function(data, status, headers, config) {
      console.log("Non Friend");
      console.log(data);

        $rootScope.loadednonfriend = data;

    }).error(function(data, status, headers, config) {
        $scope.status = status;
    }); //End GET request for profile info
    //
    // //
    $http({
        url: rootUrl + usersearch + "/wishlists",
        method: "GET",
        headers: {'Authorization': User.getToken()},
        data: {
            username: usersearch
        }
    }).success(function(data, status, headers, config) {

        $rootScope.friendwishlistArray = data.user

    }).error(function(data, status, headers, config) {
        $scope.status = status;
    }); //End GET request for friends

    $scope.findFriend = function(clickedperson) {


        $scope.searchedFriend = GetFriend.rememberFriend(clickedperson);





    }

    $scope.getItem = function(selectedItem) {
        $scope.clickedItem = selectedItem
        console.log($scope.clickedItem)
    }


}]);
