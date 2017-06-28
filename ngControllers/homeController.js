"use strict";
define(['angularAMD','userService','descreteSlider'],function (angularAMD) {
    angularAMD.controller('HomeController',['$scope',function ($scope, ) {
        
        var self = this;
        self.showModelName = "Jins";
        self.sliderValue=1;

        self.sliderConfig = {
            min: 0,
            max: 4,
            step: 1
        };
        
        
    }]);
    
});
