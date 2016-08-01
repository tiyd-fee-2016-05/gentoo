gentooApp.controller('newWishlistCtrl', ['$scope', '$rootScope','$http', '$location', 'User', function($scope, $rootScope, $http, $location, User) {
    // if (User.isLoggedIn()) {
    //     $location.path("/");
    // }
    var rootUrl= "https://6e62d5d1.ngrok.io/";
    // var rootUrl= "https://giftbox-tiy.herokuapp.com/";


    $scope.loginUser = function() {
        $http({ 
            method: "POST",
            url:    rootUrl + "login",
            data: {
                email:    $('.userlogin[name="login_username"]').val(),
                password: $('.userpassword[name="login_password"]').val(),
            }
        }).then(function(response) {
            // TODO: store and respect expiration time??
            User.logIn(response.data.token);
            console.log(response.data.token);

      $rootScope.username= response.data.username
      $rootScope.token = response.data.token

          $location.path("/home");

        }, function() {
            alert("Something went wrong!");
        })
    }

    $rootScope.logout = function() {
        User.logOut()
    }
}])
