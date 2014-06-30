'use strict';

/**
 * @ngdoc overview
 * @name angularShopApp
 * @description
 * # angularShopApp
 *
 * Main module of the application.
 */
var angularShopApp = angular.module('angularShopApp', [
    /*'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngTouch',*/
    'ngRoute',
    'ngResource',
    'angularShopAppController',
    'angularDetailController'
]);

angularShopApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'ProductsController'
        })
        .when('/main/:id', {
            templateUrl: 'views/details.html',
            controller: 'DetailController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/main'
        });
    }]);
