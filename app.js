(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', function ($scope) {
      $scope.nameOfItems = "";
      $scope.message = "";
    
      $scope.spliteItems = function () {
        const items = $scope.nameOfItems;
        const splitItem = items.split(',');
        if(splitItem.length == 1 && $scope.nameOfItems == ""){
            $scope.message = "Please enter data first"
        }
        else if(splitItem.length <= 3){
            $scope.message = "Enjoy!!"
        }else $scope.message = "Too much!"
      };
    });
    })();
    