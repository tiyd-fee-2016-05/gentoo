gentooApp.controller('LoginCtrl', ['$scope', '$http', '$location', 'User', function($scope, $http, $location, User) {
    if (User.isLoggedIn()) {
        $location.path("/");
    }
    var rootUrl= "http://6e62d5d1.ngrok.io/";
    // var rootUrl= "http://giftbox-tiy.herokuapp.com";


    $scope.loginUser = function() {
      console.log("Submitted");
        $http({
            method: "POST",
            url:    rootUrl + "/login",
            data: {
                email:    "sinovia@gentoo.com",
                password: "password",
            }
        }).then(function(response) {
            // TODO: store and respect expiration time??
            User.logIn(response.data.token);
            console.log(response.data.token);

            User.loggedInUser(response.data.username);
            console.log(response.data.username);

        }, function() {
            alert("Something went wrong!");
        })
    }

    $scope.logout = function() {
        User.logOut()
    }
}])
