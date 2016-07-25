console.log("ProfileCtrl ready");
gentooApp.controller('ProfileCtrl', function ($scope, $http) {
    $scope.addProfile = function() {
        console.log("posting data....");
        profileData = $scope.profile;
        console.log(profileData);
 $scope.message="message"

        $http({
         url: 'http://58a85897.ngrok.io/sinovia/profile',
        //  url: 'https://giftbox-tiy.herokuapp.com/profile',
         method: "POST",
         data: profileData,
         headers: {'Authorization': 'sinovia'}
     }).success(function (data, status, headers, config) {
             $scope.persons = data;
         }).error(function (data, status, headers, config) {
             $scope.status = status;
         });

    };

    $scope.class = "red";

    $scope.changeClass = function(){
        if ($scope.class === "red")
            $scope.class = "blue";
         else
            $scope.class = "red";
    };

    
 });
