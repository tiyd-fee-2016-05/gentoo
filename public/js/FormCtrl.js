console.log("You've hacked into the Form Controller Mainframe");
gentooApp.controller('FormCtrl', function ($scope, $http) {
    $scope.submitForm = function() {
        console.log("posting data....");
        formData = $scope.form;
        var username = $('.userlogin[name="login_username"]').val()
        $scope.username = $('.userlogin[name="login_username"]').val()
        $http({
         url:  url + username+ "/profile",
            // url:  "https://giftbox-tiy.herokuapp.com/" + username+ "/profile",
         method: "GET",
         headers: {'Authorization': username},
         params: {formData}
     }).success(function (data, status, headers, config) {
       alert("You will now be redirected.");
       window.location = "#/home";
         }).error(function (data, status, headers, config) {
             $scope.status = status;
         });
    };
 });
