gentooApp.controller('RegisterCtrl', ['$rootScope', '$scope', '$http', '$location', 'User', function($rootScope, $scope, $http, $location, User) {
    $scope.userToken = User.getToken();

    // var rootUrl= "https://6e62d5d1.ngrok.io/";
    var rootUrl= "https://giftbox-tiy.herokuapp.com/";
var username = $rootScope.username
var userToken = $scope.userToken


    $scope.register = function() {
      console.log("Register User");
        $http({
            method: "POST",
            url:    rootUrl + "/register",
            data: {
                email:  $("#email").val(),
                password:  $("#password").val(),
                first_name: $("#first_name").val(),
                last_name: $("#last_name").val(),
                username: $("#username").val(),
                passwordConfirmation: $("#password_confirmation").val(),
                picture: $("#image_upload").val(),
            }
        }).then(function(response) {
            User.logIn(response.data.token);
                    $location.path("/new-profile");

        }, function() {
            alert("Something went wrong!");
        })
    }

    $scope.registerDates = function() {
var birthday = {
        dob_month:  $("#bd_month").val(),
        dob_day: $("#bd_day").val(),
        dob_year: $("#bd_year").val(),
}

var specialDay= {
  sp_month:  $("#sp_month").val(),
  sp_day: $("#sp_day").val(),
  sp_year: $("#sp_year").val(),
}

$http({


          url:  rootUrl + "profile",
       method: "POST",
       headers: {'Authorization': userToken},
            data: {
                birthday: birthday,
                specialDay: specialDay,

            }
        }).then(function(response) {
        }, function() {
            alert("Something went wrong!");
        })
    }

    $scope.registerHolidays = function() {

$http({
          url:  rootUrl + "profile",
       method: "POST",
       headers: {'Authorization': userToken},
            data: {
                holidays: $scope.registerData.holidays
            }
        }).then(function(response) {
        }, function() {
            alert("Something went wrong!");
        })
    }

    $scope.registerInterests = function() {
      // console.log($scope.registerData.interests);

    $http({
          url:  rootUrl + "profile",
       method: "POST",
       headers: {'Authorization': userToken},
            data: {
                interests: $scope.registerData.interests
            }
        }).then(function(response) {
        }, function() {
            alert("Something went wrong!");
        })
    }

    $scope.registerFavorites = function() {

  var favorites = {
    colors: $("#fav_color").val(),
    fav_animal: $("#fav_animal").val(),
    fav_season: $scope.registerData.season,
    fav_restaurant: $("#fav_restaurant").val(),
    fav_custom: $("#fav_custom").val(),
}
    $http({
          url:  rootUrl + "profile",
       method: "POST",
       headers: {'Authorization': userToken},
       data:{
       favorites: favorites
   }
        }).then(function(response) {
        }, function() {
            alert("Something went wrong!");
        })
    }

    $scope.sendEmail = function() {


    var email = $("#inviteEmail").val();

    $http({
          url:  rootUrl + "invitation",
       method: "POST",
       headers: {'Authorization': userToken},
       data:{email: email
    }
        }).then(function(response) {
        }, function() {
            alert("Something went wrong!");
        })
    }




    $scope.logout = function() {
        User.logOut()
    }



}])
