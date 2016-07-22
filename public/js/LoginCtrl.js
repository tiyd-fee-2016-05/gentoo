console.log("You've hacked into the Form Controller Mainframe");
gentooApp.controller('LoginCtrl', function ($rootScope, $scope, $http) {
    $scope.submitForm = function() {
        console.log("posting data....");
        formData = $scope.form;
        var username = $('.userlogin[name="login_username"]').val()
        $scope.username = $('.userlogin[name="login_username"]').val()

        $http({
         url:  "http://58a85897.ngrok.io/" + username+ "/friends",
            // url:  "https://giftbox-tiy.herokuapp.com/" + username+ "/friends",
         method: "GET",
         headers: {'Authorization': username},
         params: {formData}
       }).success(function (data, status, headers, config) {
           $rootScope.loadedfriends= data;
           $rootScope.friendList= data.user.requested_friendships;
          //  $rootscope.friendIndex = data[data.length - 1].index;
console.log($rootScope.friendList[0].first_name)
         }).error(function (data, status, headers, config) {
             $scope.status = status;
         });//End GET request





        $http({
         url:  "http://58a85897.ngrok.io/" + username+ "/profile",
            // url:  "https://giftbox-tiy.herokuapp.com/" + username+ "/profile",
         method: "GET",
         headers: {'Authorization': username},
         params: {formData}
     }).success(function (data, status, headers, config) {
       alert("You will now be redirected.");
           $rootScope.loadedprofile= data;
       window.location = "#/home";
         }).error(function (data, status, headers, config) {
             $scope.status = status;
         });//End GET request










    };  //End Submit Form Function
 });
