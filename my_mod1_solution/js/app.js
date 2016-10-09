(function(){

'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject=['$scope'];

function LunchCheckController ($scope){
  $scope.customStyle = {};
  $scope.checkLunch = function () {
    if ($scope.lunchItems)
    {
      var lunchItemsArray = $scope.lunchItems.split(',');
      var nbItems = lunchItemsArray.length;
      for (var element of lunchItemsArray)
      {
        if (!element.trim()){
          nbItems--;
        }
      }

      if (nbItems < 4 ) {
        $scope.message='Enjoy!';
        $scope.customStyle.colorClass = "green";
        $scope.customStyle.borderClass="greenborder";
      }
      else {
        $scope.message='Too much!';
        $scope.customStyle.colorClass = "green";
        $scope.customStyle.borderClass="greenborder";
      }
    }
    else {
      $scope.message = 'Please enter data first.';
      $scope.customStyle.colorClass = "red";
      $scope.customStyle.borderClass="redborder";
    }


  };
}

})();
