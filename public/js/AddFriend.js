gentooApp.controller('AddFriendCtrl', function ($scope, $http) {
    $scope.addFriend = function(friendname) {
console.log("friend added: " + friendname);
'$rootScope', '$scope', '$http', '$location', 'User', function($rootScope, $scope, $http, $location, User) {
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

};
}
});

gentooApp.controller('AcceptFriendCtrl', function ($scope, $http) {
    $scope.acceptFriend = function(clickedfriend) {
      console.log(clickedfriend);
      // $http({
      //   method: 'POST',
      //       url: 'http://58a85897.ngrok.io/friends/accept',
      //             //  url: 'https://giftbox-tiy.herokuapp.com/friends/accept',
      //       headers: {'Authorization': 'sinovia'},
      //       params: {"accepted_friend" : "vega"},
      // }).success(function successCallback(response) {
      //         // console.log(response);
      //
      //
      //   }, function errorCallback(response) {
      //     // called asynchronously if an error occurs
      //     // or server returns response with an error status.
      //   });
};
});
