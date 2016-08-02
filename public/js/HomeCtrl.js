gentooApp.controller('HomeController', ['$rootScope', '$scope', '$http', '$location', 'User', function($rootScope, $scope, $http, $location, User) {
    $scope.userToken = User.getToken();
    $scope.domain = window.location.href;

    if (!$scope.userToken) {
        $location.path("#/login");
    }

    // var rootUrl= "https://6e62d5d1.ngrok.io/";
    var rootUrl= "https://giftbox-tiy.herokuapp.com/";

console.log($scope.userToken);
var username = $rootScope.username
var userToken = $scope.userToken

    $http({
              url:  rootUrl + "profile",
           method: "GET",
           headers: {'Authorization': userToken},
       }).success(function (data, status, headers, config) {
         console.log("Profile Information for " + username);
         console.log(data);
             $rootScope.loadedprofile= data;
             $rootScope.holidayList = data.user.holidays
             $rootScope.interestList = data.user.interests
              $rootScope.favoriteList = data.user.favorites

         window.location = "#/home";
           }).error(function (data, status, headers, config) {
               $scope.status = status;
           });//End GET request for profile info
    //
    //
    $http({
                url:  rootUrl + "wishlists",
             method: "GET",
             headers: {'Authorization': userToken},
             //  params: {formData}
            }).success(function (data, status, headers, config) {
                     console.log("Wishlist Info for " + $rootScope.username);
                     console.log(data);
                     $rootScope.wishlistArray = data.user
                    console.log("List of Lists");
                     console.log($rootScope.wishlistArray);
              }).error(function (data, status, headers, config) {
                  $scope.status = status;
              });//End GET request for wishlist
            $scope.AddList = function() {
var newListData = $scope.newItem;

              $http({
                method: 'POST',
                    url:  rootUrl + "wishlists",
                    headers: {'Authorization': userToken},
                    data: {
                    name: $("#wishlist_title").val(),
                        item: {
                          name: $("#item_title").val(),
                          description:$("#item_desc").val(),
                          holiday:$("#item_holiday").val(),
                          interest:$("#item_interests").val(),
                        }

                }
              }).success(function successCallback(response) {

                }, function errorCallback(response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                });

//To add items POST /wishlists/:wishlist_id/items/ to create ID






        };

        $scope.addWishlistItem = function(wishlistID, itemID){
          console.log("This is the id of this list "+ wishlistID);
          $http({
            method: 'POST',
                url:  rootUrl + wishlistID + "/items",
                headers: {'Authorization': userToken},
                data: {
            }
          }).success(function successCallback(response) {

            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };


        $scope.getDetails = function(selectedItem) {
          $scope.clickedhomeItem = selectedItem
            console.log(  $scope.clickedhomeItem)
        }

        $scope.getList = function(selectedList) {
          $scope.clickedhomeList = selectedList
            console.log(  $scope.clickedhomeList)
        }



}]);


// To edit your profile
gentooApp.controller('EditController', ['$rootScope', '$scope', '$http', '$location', 'User', function($rootScope, $scope, $http, $location, User) {
    $scope.userToken = User.getToken();
    $scope.domain = window.location.href;
    if (!$scope.userToken) {
        $location.path("#/login");
    }

    // var rootUrl= "https://6e62d5d1.ngrok.io/";
    var rootUrl= "https://giftbox-tiy.herokuapp.com/";

var username = $rootScope.username
var userToken = $scope.userToken

    $http({
              url:  rootUrl + "profile",
           method: "GET",
           headers: {'Authorization': userToken},
       }).success(function (data, status, headers, config) {
         console.log(data);
             $rootScope.loadedprofile= data;
             $rootScope.holidayList = data.user.holidays
             $rootScope.interestList = data.user.interests
              $rootScope.favoriteList = data.user.favorites
           }).error(function (data, status, headers, config) {
               $scope.status = status;
           });//End GET request for profile info
    //

    //
    $http({
              url:  rootUrl + "wishlists",
           method: "GET",
           headers: {'Authorization': userToken},
           //  params: {formData}
          }).success(function (data, status, headers, config) {
                   $rootScope.wishlistArray = data.user

            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });//End GET request for friends

            $scope.AddList = function() {
var newListData = $scope.newItem;

              $http({
                method: 'POST',
                    url:  rootUrl + "wishlists",
                    headers: {'Authorization': userToken},
                    data: {
                    name: $("#wishlist_title").val(),
                  description:$("#item_desc").val(),
                          holiday:$("#item_holiday").val(),
                          interest:$("#item_interests").val(),
                }
              }).success(function successCallback(response) {

                }, function errorCallback(response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                });
        };




        $scope.deleteInterest = function(id){
          console.log("This is the id of this thing "+id);
          $http({
            method: 'DELETE',
                url:  rootUrl + "profile/interests/" + id,
                headers: {'Authorization': userToken},
                data: {
            }
          }).success(function successCallback(response) {

            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };

        $scope.deleteHoliday = function(id){
          console.log("This is the id of this thing "+id);
          $http({
            method: 'DELETE',
                url:  rootUrl + "profile/holidays/" + id,
                headers: {'Authorization': userToken},
                data: {
            }
          }).success(function successCallback(response) {

            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };

        $scope.deleteFavorite = function(id){
          console.log("This is the id of this thing "+id);
          $http({
            method: 'DELETE',
                url:  rootUrl + "profile/favorites/" + id,
                headers: {'Authorization': userToken},
                data: {
            }
          }).success(function successCallback(response) {

            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };

        $scope.deleteWishlist = function(id){
          console.log("This is the id of this thing "+id);
          $http({
            method: 'DELETE',
                url:  rootUrl + "wishlists/" + id,
                headers: {'Authorization': userToken},
                data: {
            }
          }).success(function successCallback(response) {

            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };

        $scope.deleteWishlistItem = function(wishlistID, itemID){
          console.log("This is the id of this list "+ wishlistID);
          console.log("This is the id of this item " + itemID);
          $http({
            method: 'DELETE',
                url:  rootUrl + "wishlists/"+  wishlistID + "/items/" + itemID,
                headers: {'Authorization': userToken},
                data: {
            }
          }).success(function successCallback(response) {

            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };

}]);
