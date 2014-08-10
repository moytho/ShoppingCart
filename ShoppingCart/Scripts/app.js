'use strict';

var shoppingCart = angular.module('shoppingCart', ['ngRoute', 'shoppingCartControllers', 'shoppingCartServices']);

shoppingCart.config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
    when('/item', {
        templateUrl: 'partials/item-list.html',
        controller: 'ItemListCtrl'
    }).
    when('/item/new', {
        templateUrl: 'partials/item-detail.html',
        controller: 'ItemCreateCtrl'
    }).
    when('/item/edit/:editId', {
        templateUrl: 'partials/item-detail.html',
        controller: 'ItemEditCtrl'
    }).
    otherwise({
        redirectTo:'/item'
    });
}]);