var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', function ($scope, $mdSidenav, $timeout) {
    this.message = "hello angular";

}]);