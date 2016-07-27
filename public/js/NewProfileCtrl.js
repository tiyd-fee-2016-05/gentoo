gentooApp.controller('NewProfileCtrl', function ($rootScope, $scope, $http) {
 // var rootUrl= "http://6e62d5d1.ngrok.io/";
 var rootUrl= "http://giftbox-tiy.herokuapp.com/";
 var username= "sinovia";

    $scope.submitNewProfile = function() {
        ProfileData = $scope.form;
        console.log(username);



        $http({
            url:  rootUrl + "/" + username+ "/profile",
         method: "POST",
         headers: {'Authorization': username},
         params: {ProfileData}
       }).success(function (data, status, headers, config) {


         }).error(function (data, status, headers, config) {
             $scope.status = status;
         });//End GET request for friends


    //     $http({
    //     //  url:  "http://58a85897.ngrok.io/" + username+ "/profile",
    //         url:  rootUrl+ "/" + username+ "/profile",
    //      method: "POST",
    //      headers: {'Authorization': username},
    //      params: {formData}
    //  }).success(function (data, status, headers, config) {
    //        $rootScope.loadedprofile= data;
    //    window.location = "#/home";
    //      }).error(function (data, status, headers, config) {
    //          $scope.status = status;
    //      });//End GET request for profile info
     //
     //
    //      $http({
    //          url:  rootUrl + "/" + username+ "/wishlists",
    //       method: "GET",
    //       headers: {'Authorization': username},
    //      //  params: {formData}
    //     }).success(function (data, status, headers, config) {
    //              console.log("Wishlist Info for " + username);
    //              console.log(data);
    //              $rootScope.wishlistArray = data.user
    //             console.log("List of Lists");
    //              console.log($rootScope.wishlistArray);
    //       }).error(function (data, status, headers, config) {
    //           $scope.status = status;
    //       });//End GET request for friends







    };  //End Submit Form Function
 });
