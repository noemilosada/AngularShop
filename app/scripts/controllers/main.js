/**
 * Main controller
 * 
 * @Name: main.js
 * @Date: 22/06/2014
 * @version: 0.0.1
 * @Author: Noemi Losada <info@noemilosada.com>
 * Creative Commons License <http://creativecommons.org/licenses/by-sa/3.0/>
 */

'use strict';

var angularShopController = angular.module('angularShopAppController', []);

/**
 * Retrieve categories json data 
 */
angularShopController.controller('CategoriesController', ['$scope', '$http', function($scope, $http) {
   $http.get('scripts/jsonData/categories.json').success(function(response) {
        $scope.categories = response.categories;
   });
}]);

/**
 * Retrieve all products
 */
angularShopController.controller('ProductsController', ['$scope', '$http', function($scope, $http) {
    $http.get('scripts/jsonData/products.json').success(function(response) {
      $scope.products = response.products;
    });

    // Data binding
    $scope.orderProp = 'name';
}]);
