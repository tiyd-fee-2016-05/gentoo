
gentooApp.controller('SignupCtrl', function ($scope, $http) {
    $scope.submitForm = function() {
        console.log("posting data....");
        newUserData = $scope.newUser;
        var username = $('.usercreate[name="create_username"]').val()
        $http({
        //  url:  "https://58a85897.ngrok.io/" + username+ "/profile",
            url:  "https://giftbox-tiy.herokuapp.com/" + username+ "/profile",
         method: "GET",
         headers: {'Authorization': username},
         params: {newUserData}
     }).success(function (data, status, headers, config) {
       alert("You will now be redirected.");
       window.location = "#/home";
         }).error(function (data, status, headers, config) {
             $scope.status = status;
         });
    };
 });
