"use strict";

require.config({
    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': 'scripts/angular.min',
        'angularRoute': 'scripts/angular-route.min',
        'angularAMD': 'scripts/angularAMD.min',

        'app': 'ngApp/app',
        //Controllers
        'HomeController': 'ngControllers/homeController',
        'FormController': 'ngControllers/formController',

        //Services
        'configService' : 'ngServices/Common/configService',
        'userService' : 'ngServices/userService'


    },
    shim:{
        'angularAMD': ['angular'],
        'angularRoute': ['angular']
    },
    deps: ['app']

});