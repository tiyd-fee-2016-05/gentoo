// angular.module('gentooApp', [])
gentooApp.controller('TabController', ['$rootScope', '$scope', '$http', '$location', 'User', 'Friend', function($rootScope, $scope, $http, $location, User, Friend) {
    $scope.userToken = User.getToken();
    var userToken = $scope.userToken
    var usersearch = $scope.friendtoLoad
    if (!$scope.userToken) {
        $location.path("#/login");
    }
    $scope.tab = 1;

    $scope.setTab = function(newTab) {
        $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum) {
        return $scope.tab === tabNum;
    };

    // Add list items
    $scope.FindTodos = function() {
        console.log(usersearch);
        // var rootUrl = "https://6e62d5d1.ngrok.io/";
        var rootUrl = "https://giftbox-tiy.herokuapp.com/";
        $http({
            url: rootUrl + usersearch + "/profile/ideabox",
            method: "GET",
            headers: {
                'Authorization': userToken
            },
        }).success(function(data, status, headers, config) {
            console.log(data);
            $scope.todos = data.ideabox

            var arr = [];
            console.log(arr);

            $scope.viewIdea = function() {

                var vm = this.todo;
                console.log(vm);
                arr.push(vm.id);
                console.log(arr);
            };

            $scope.clearCompleted = function() {

                var tobeDeleted = arr

                console.log("Delete these please:" + tobeDeleted);
                // var rootUrl = "https://6e62d5d1.ngrok.io/";
                var rootUrl = "https://giftbox-tiy.herokuapp.com/";
                $scope.userToken = User.getToken();
                var userToken = $scope.userToken
                var usersearch = $scope.friendtoLoad
                console.log(userToken)
                console.log(usersearch);

                $http({
                    url: rootUrl + usersearch + "/profile/ideabox",
                    method: "DELETE",
                    headers: {
                        'Authorization': userToken
                    },
                    data: {
                        cleared_ideas: tobeDeleted
                    }
                }).success(function(data, status, headers, config) {
                    console.log(data);
                    $scope.todos = data.ideabox
                    console.log(data);
                    console.log(response);
                    console.log(response.data);


                }).error(function(data, status, headers, config) {
                    $scope.status = status;
                });

            };



            console.log(data);
        }).error(function(data, status, headers, config) {
            $scope.status = status;
        });
    }

    $scope.AddIdea = function() {
        // var rootUrl = "https://6e62d5d1.ngrok.io/";
        var rootUrl = "https://giftbox-tiy.herokuapp.com/";
        console.log("You had an idea!");
        $http({
            url: rootUrl + usersearch + "/profile/ideabox",
            method: "POST",
            headers: {
                'Authorization': userToken
            },
            data: {
                text: $('#ideaboxText').val(),
            }
        }).success(function(data, status, headers, config) {
            console.log(data);
            $scope.todos = data.ideabox
            console.log(data);
            console.log(response);
            console.log(response.data);


        }).error(function(data, status, headers, config) {
            $scope.status = status;
        });
    }



    // var rootUrl = "https://6e62d5d1.ngrok.io/";
    var rootUrl = "https://giftbox-tiy.herokuapp.com/";

    // $http({
    // 					url:  rootUrl + usersearch+ "/profile/ideabox",
    // 			 method: "POST",
    // 			 headers: {'Authorization': userToken},
    // 			 data: {text: $('#ideaboxText').val(),  }
    // 			}).success(function (data, status, headers, config) {
    // 		console.log(data);
    // 				$scope.todos= data.ideabox
    // 				console.log(data);
    // 				}).error(function (data, status, headers, config) {
    // 						$scope.status = status;
    // 				});


    $scope.getTotalTodos = function() {
        return $scope.todos.length;
    };

    $scope.addTodo = function() {
        $scope.todos.push({
            text: $scope.formTodoText,
            done: false
        });
        $scope.formTodoText = '';

    };


    // Needs to clear selected items from list


}]);

// tabCtrl.js
gentooApp.controller('TabController2', ['$scope', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab) {
        $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum) {
        return $scope.tab === tabNum;
    };

}]);
