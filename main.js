"use strict";

require.config({
    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': 'scripts/angular.min',
        'angularRoute': 'scripts/angular-route.min',
        'angularAMD': 'scripts/angularAMD.min',
        'jQuery':'scripts/jquery.min',
        'jQuery-ui':'scripts/jquery-ui',

        'app': 'ngApp/app',
        //Controllers
        'HomeController': 'ngControllers/homeController',
        'FormController': 'ngControllers/formController',

        //Services
        'configService' : 'ngServices/Common/configService',
        'userService' : 'ngServices/userService',
        //directives
        'descreteSlider': 'ngDirectives/Common/descreteSliderDirective',

    },
    shim:{
        'angularAMD': {deps:['angular']},
        'angularRoute': {deps:['angular']},
        'jQuery-ui':{deps:['jQuery']},
        'descreteSlider':{deps:['jQuery','jQuery-ui']}
    },
    deps: ['app']

});