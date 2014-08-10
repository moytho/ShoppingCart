'use strict';

var shoppingCartControllers = angular.module('shoppingCartControllers', []);

shoppingCartControllers.controller('ItemEditCtrl', ['$scope','$routeParams','$location','Todo',
    function ($scope,$routeParams,$location,Todo) {     
        $scope.action="Update";
        var id=$routeParams.editId;
        $scope.item= Todo.get({Id: id});

        $scope.save=function(item){
            Todo.update({id:id},item,function(){
                $location.path('/item');
             });
        };

}]);

shoppingCartControllers.controller('ItemCreateCtrl', ['$scope', '$location','Todo',
    function ($scope,$location,Todo) {     
        $scope.action="Add";
        $scope.save=function(item){
            Todo.save(item,function(){
                $location.path('/item');
            });
        };
}]);

shoppingCartControllers.controller('ItemListCtrl', ['$scope', 'Todo',
  function ($scope, Todo) {

      $scope.reset = function () {
          //debugger; 
          $scope.limit = 20;
          $scope.offset = 0;
          $scope.items = [];
          $scope.more = true;
          $scope.search();
      };

      $scope.delete = function() {
            var id=this.todo.Id;
            Todo.delete({ id:id },function(){
                $("#todo_"+id).fadeOut();
            });
      };

      $scope.search = function () {
          Todo.query({ q: $scope.query, sort: $scope.sort_order, desc: $scope.is_desc, offset: $scope.offset, limit: $scope.limit }, function (data) {
              $scope.more = data.length === 20;
              $scope.items = $scope.items.concat(data);
          });
      };

      $scope.has_more = function () {
          return $scope.more;
      }

      $scope.show_more = function () {
          $scope.offset += $scope.limit;
          $scope.search();
      };

      $scope.sort = function (col) {
          if ($scope.sort_order === col) {
              $scope.is_desc = !$scope.is_desc;
          } else {
              $scope.sort_order = col;
              $scope.is_desc = false;
          }
          $scope.reset();
      }

      $scope.sort_order = "Priority";
      $scope.is_desc = false;


      $scope.reset();

  }]);

shoppingCartControllers.controller('ItemDetailCtrl', function ($scope, $location) {
    $scope.saludoDetalle = "Hola Erick";
});