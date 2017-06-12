"use strict";
define(['angularAMD', 'angularRoute','configService'], function (angularAMD) {

//rename webApp to your business context
var app = angular.module('myWebApp',['ngRoute']);

    app.controller('AppController',['configService',function($scope){
        $scope.title = "This is app controller scope"; 

    }]);
    app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
        $routeProvider
        .when('/Home',angularAMD.route({
            templateUrl:'ngViews/Home/home.html',
            controller:'HomeController',
            controllerAs:'ctrl'
        }))
        .when('/Form',angularAMD.route({
            templateUrl:'ngViews/Form/form.html',
            controller:'FormController',
            controllerAs:'ctrl'
        }))
        .otherwise({
            redirectTo:'/'
        });

        $locationProvider.html5Mode(true);

    }]);

 return angularAMD.bootstrap(app);

});