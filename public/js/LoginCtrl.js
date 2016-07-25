gentooApp.controller('LoginCtrl', function ($rootScope, $scope, $http) {
 // var rootUrl= "http://6e62d5d1.ngrok.io/";
 var rootUrl= "http://giftbox-tiy.herokuapp.com";

    $scope.submitForm = function() {
        formData = $scope.form;
        var username = $('.userlogin[name="login_username"]').val();
        $rootScope.username = username
        console.log(username);



        $http({
            url:  rootUrl + "/" + username+ "/friends",
         method: "GET",
         headers: {'Authorization': username},
        //  params: {formData}
       }).success(function (data, status, headers, config) {
                console.log("Friend Info for " + username);
                console.log(data);
         $rootScope.friendDetails = data
        $rootScope.friendList = data.user.friends
         $rootScope.friendRequests = data.user.requested_friendships
                console.log("Friend Requests for " + username);
                console.log("Number of Requests: " + $rootScope.friendDetails.user.requested_count);
         }).error(function (data, status, headers, config) {
             $scope.status = status;
         });//End GET request for friends





        $http({
            url:  rootUrl+ "/" + username+ "/profile",
         method: "GET",
         headers: {'Authorization': username},
         params: {formData}
     }).success(function (data, status, headers, config) {
       console.log("Profile Information for " + username);
       console.log(data);
           $rootScope.loadedprofile= data;
           $rootScope.holidayList = data.user.holidays
           $rootScope.interestList = data.user.interests
            $rootScope.colorList = data.user.colors

       window.location = "#/home";
         }).error(function (data, status, headers, config) {
             $scope.status = status;
         });//End GET request for profile info


         $http({
             url:  rootUrl + "/" + username+ "/wishlists",
          method: "GET",
          headers: {'Authorization': username},
         //  params: {formData}
        }).success(function (data, status, headers, config) {
                 console.log("Wishlist Info for " + username);
                 console.log(data);
                 $rootScope.wishlistArray = data.user
                console.log("List of Lists");
                 console.log($rootScope.wishlistArray);
          }).error(function (data, status, headers, config) {
              $scope.status = status;
          });//End GET request for friends







    };  //End Submit Form Function
 });
