gentooApp.controller('RegisterCtrl', ['$scope', '$http', '$location', 'User', function($scope, $http, $location, User) {
    if (User.isLoggedIn()) {
        $location.path("/");
    }

    $scope.user = { email: "", password: "", passwordConfirmation: "" };
    var rootUrl= "https://6e62d5d1.ngrok.io/";
    // var rootUrl= "https://giftbox-tiy.herokuapp.com";


    $scope.register = function() {
      console.log("Submitted");
        $http({
            method: "POST",
            url:    rootUrl + "/register",
            data: {
                email:    "testboop@gentoo.com",
                password: "password",
                first_name:" $Test",
                last_name: "$Beep",
                username: "$beep",
                passwordConfirmation: "$password",
            }
        }).then(function(response) {
            // TODO: store and respect expiration time??
            User.logIn(response.data.token);
            console.log(response.data.token);
        }, function() {
            alert("Something went wrong!");
        })
    }

    $scope.logout = function() {
        User.logOut()
    }
}])
