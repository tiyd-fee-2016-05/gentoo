gentooApp.controller('HomeController', ['$scope', '$http', '$location', 'User', function($scope, $http, $location, User) {
    $scope.userToken = User.getToken();

    if (!$scope.userToken) {
        $location.path("/sign_up");
    }

    $scope.domain = window.location.href;

    $http({
        method:  "GET",
        url:     "http://localhost:3000/api/me",
        headers: {
            "Authorization": $scope.userToken
        }
    }).then(function(response) {
        $scope.user = response.data;
    }, function() {
        alert("Something went wrong!");
    });
}]);
