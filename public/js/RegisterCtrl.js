gentooApp.controller('RegisterCtrl', ['$scope', '$http', '$location', 'User', function($scope, $http, $location, User) {
    if (User.isLoggedIn()) {
        $location.path("/");
    }

    $scope.user = { email: "", password: "", passwordConfirmation: "" };
    var rootUrl= "http://6e62d5d1.ngrok.io/";
    // var rootUrl= "http://giftbox-tiy.herokuapp.com";

console.log("Submitted");
    $scope.register = function() {
        $http({
            method: "POST",
            url:    rootUrl + "/register",
            data: {
                email:    "beepboop@gentoo.com",
                password: "password",
                first_name:" $Beep",
                last_name: "$Boop",
                username: "$beepboop",
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
