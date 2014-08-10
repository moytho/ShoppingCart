'use strict';

var shoppingCartServices = angular.module('shoppingCartServices', ['ngResource']);

shoppingCartServices.factory('Todo', ['$resource',
  function ($resource) {
       return $resource('/api/Todo/:id', { id: '@id' }, { update: { method: 'PUT'} });
  }]);