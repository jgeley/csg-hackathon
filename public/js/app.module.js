var app = angular.module('StarterApp', ['ngMaterial', 'ui.router']);

app.controller('AppCtrl', ['$scope', '$mdDialog', '$state','$http', function ($scope, $mdDialog, $state,$http) {
    this.message = "hello angular";
    this.settings = {
        printLayout: true,
        showRuler: true,
        showSpellingSuggestions: true,
        presentationMode: 'edit'
    };
    this.sampleAction = function (name, ev) {

        if (name == 'start') {
            $http({
                method: 'GET',
                url: '/control/start'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        } else if (name == 'stop') {
            $http({
                method: 'GET',
                url: '/control/stop'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
    };

}]);

app
    .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {
        $mdThemingProvider.definePalette('amazingPaletteName', {
            '50': 'ffebee',
            '100': 'ffcdd2',
            '200': 'ef9a9a',
            '300': 'e57373',
            '400': 'ef5350',
            '500': 'f44336',
            '600': 'e53935',
            '700': 'd32f2f',
            '800': 'c62828',
            '900': 'b71c1c',
            'A100': 'ff8a80',
            'A200': 'ff5252',
            'A400': 'ff1744',
            'A700': 'd50000',
            'contrastDefaultColor': 'light', // whether, by default, text (contrast)
            // on this palette should be dark or light
            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
            'contrastLightColors': undefined // could also specify this if default was 'dark'
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('amazingPaletteName')
    });