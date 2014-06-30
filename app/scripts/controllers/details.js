/**
 * Main controller for details product page
 * 
 * @Name: details.js
 * @Date: 22/06/2014
 * @version: 0.0.1
 * @Author: Noemi Losada <info@noemilosada.com>
 * Creative Commons License <http://creativecommons.org/licenses/by-sa/3.0/>
 */

'use strict';

var angularDetailController = angular.module('angularDetailController', []);

/**
 * Retrieve one category 
 */
angularDetailController.controller('DetailController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('scripts/jsonData/products.json').success(function(response) {
        angular.forEach(response.products, function(val, key) {
            if (val.id == $routeParams.id) {
                $scope.product = response.products[key].properties;
            }
        });
    });
}]);
