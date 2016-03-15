var app = angular.module('resumeRoutes',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/', {
            redirectTo: '/overall'
        })
        .when('/overall', {
            templateUrl: 'templates/overall.html',
        })
        .when('/technical', {
            templateUrl: 'templates/technical.html',
        })
        .otherwise({
            redirectTo: '/overall'
        });
    }]);