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
			$scope.FindTodos = function(){
				console.log(usersearch);
				// var rootUrl= "https://6e62d5d1.ngrok.io/";
				var rootUrl= "https://giftbox-tiy.herokuapp.com/";
				$http({
									url:  rootUrl + usersearch+ "/profile/ideabox",
							 method: "GET",
							 headers: {'Authorization': userToken},
							}).success(function (data, status, headers, config) {
						console.log(data);
								$scope.todos= data.ideabox



								console.log(data);
								}).error(function (data, status, headers, config) {
										$scope.status = status;
								});
			}

			$scope.AddIdea = function(){
				// var rootUrl= "https://6e62d5d1.ngrok.io/";
				var rootUrl= "https://giftbox-tiy.herokuapp.com/";
				console.log("You had an idea!");
				$http({
									url:  rootUrl + usersearch+ "/profile/ideabox",
							 method: "POST",
							 headers: {'Authorization': userToken},
							 data: {text: $('#ideaboxText').val(),  }
							}).success(function (data, status, headers, config) {
						console.log(data);
								$scope.todos= data.ideabox



								console.log(data);
								}).error(function (data, status, headers, config) {
										$scope.status = status;
								});
			}


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
			$scope.clearCompleted = function() {
				$scope.todos = _.filter($scope.todos, function(todo) {
					console.log("Delete selected item from idea box");

					return !todo.done;
					console.log("Delete selected item from idea box");
				});
			};

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
