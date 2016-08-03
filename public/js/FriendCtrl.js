gentooApp.controller('FriendController', ['$rootScope', '$scope', '$http', '$location','Friend', 'User', function($rootScope, $scope, $http, $location,GetFriend, User) {
    $scope.userToken = User.getToken();
    $scope.domain = window.location.href;

    if (!$scope.userToken) {
        $location.path("#/login");
    }
    var rootUrl= "https://6e62d5d1.ngrok.io/";
    // var rootUrl= "https://giftbox-tiy.herokuapp.com/";


var username = $rootScope.username
var userToken = $scope.userToken
    $http({
              url:  rootUrl + "friends",
           method: "GET",
    headers: {'Authorization': User.getToken()},
          //  params: {formData}
         }).success(function (data, status, headers, config) {

           $rootScope.friendDetails = data
          $rootScope.friendList = data.user.friends
           $rootScope.friendRequests = data.user.requested_friendships
           $rootScope.usernameOffriendRequests = data.user.requested_friendships

           }).error(function (data, status, headers, config) {
               $scope.status = status;
           });//End GET request for friends

           $http({
                     url:  rootUrl + "users",
                  method: "GET",
              headers: {'Authorization': User.getToken()},
                }).success(function (data, status, headers, config) {
console.log("Gentoo Users");
console.log(data);

                 $rootScope.userList = data


                  }).error(function (data, status, headers, config) {
                      $scope.status = status;
                  });//End GET request for friends

$scope.findFriend = function(clickedperson) {
  $scope.searchedFriend = GetFriend.rememberFriend(clickedperson);
}

$scope.checkFriend = function(arewefriends, friendname) {
  console.log(arewefriends);
console.log(friendname);
  if (arewefriends === true) {
    console.log("You are totally buds");
      $scope.searchedFriend = GetFriend.rememberFriend(friendname);
    $location.path("/friend-profile");

  }else {
    console.log("You ain't frands!");
    $scope.searchedFriend = GetFriend.rememberNonFriend(friendname);
        $location.path("/add-friend");
  }

  // $scope.searchedFriend = GetFriend.checkFriend(clickedperson);
  console.log(arewefriends);
}



}]);
