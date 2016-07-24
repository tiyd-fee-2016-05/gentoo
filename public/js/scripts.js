// var gentooApp = angular.module("mainApp", ['ngRoute']);

gentooApp.directive('toolbarTip', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).toolbar(scope.$eval(attrs.toolbarTip));
        }
    };
});

// console.log("ProfileCtrl ready");
// gentooApp.controller('MenuCtrl', function ($scope) {
//
//
//     $scope.class = "red";
//
//     $scope.changeClass = function(){
//         if ($scope.class === "red")
//             $scope.class = "blue";
//          else
//             $scope.class = "red";
//     };
// });
//

//
// $('.menu , .linee').on('click', function() {
//   $('.menu').toggleClass('over');
//   $('.linea1').toggleClass('overL1');
//   $('.linea2').toggleClass('overL2');
//   $('.linea3').toggleClass('overL3');
//   $('.voci-menu').toggleClass('overvoci');
// });
