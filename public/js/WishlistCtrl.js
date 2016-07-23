gentooApp.controller('LoginCtrl', function ($rootScope, $scope, $http) {
 var rootUrl= "http://6e62d5d1.ngrok.io/";
    $scope.submitForm = function() {
        formData = $scope.form;
        var username = $('.userlogin[name="login_username"]').val();
        $rootScope.username = username
        console.log(username);



        $http({
            url:  rootUrl + username+ "/friends",
         method: "GET",
         headers: {'Authorization': username},
        //  params: {formData}
       }).success(function (data, status, headers, config) {
           $rootScope.loadedfriends= data;
           $rootScope.friendList= data;
           console.log($rootScope.loadedfriends);
           $rootScope.friendList= data.user.requested_friendships;
         }).error(function (data, status, headers, config) {
             $scope.status = status;
         });//End GET request





        $http({
        //  url:  "http://58a85897.ngrok.io/" + username+ "/profile",
            url:  rootUrl+ username+ "/profile",
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
