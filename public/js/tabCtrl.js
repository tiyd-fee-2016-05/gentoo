// angular.module('gentooApp', [])
gentooApp.controller('TabController', ['$scope', function($scope) {
		$scope.tab = 1;

		$scope.setTab = function(newTab) {
			$scope.tab = newTab;
		};

		$scope.isSet = function(tabNum) {
			return $scope.tab === tabNum;
		};

// Add list items
			$scope.todos = [{
				text: 'List item 1',
				done: false
			}, {
				text: 'List item 2',
				done: false
			}, {
				text: 'List item 3',
				done: false
			}];

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
