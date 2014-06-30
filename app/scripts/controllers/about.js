'use strict';

/**
 * @ngdoc function
 * @name angularShopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularShopApp
 */
angular.module('angularShopApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
