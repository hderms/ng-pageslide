var app = angular.module("app", ["pageslide-directive", "ngRoute"]);

app.controller('pageslideCtrl', ['$scope',
    pageslideCtrl

]);

function pageslideCtrl($scope) {

    $scope.checked; // This will be binded using the ps-open attribute

}

function foobarCtrl($scope) {
    $scope.checked; // This will be binded using the ps-open attribute

}

app.controller('foobarctrl', ['$scope ', foobarCtrl]);



angular.module('app').
config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix("!");
        $routeProvider.when('/foobar', {
            templateUrl: 'foobar.html',
            controller: foobarCtrl
        });

        $routeProvider.when('/pageslide', {
            templateUrl: 'pageslide.html',
            controller: pageslideCtrl
        });


    }
]);
