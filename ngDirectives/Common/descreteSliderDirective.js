"use strict"
define(['angularAMD'],function(angularAMD){
    angularAMD.directive("descreteSlider", function() {
    return {
        restrict: 'A',
        scope: {
            config: "=",
            value: "=",
        },
        link: function(scope, elem, attrs) {
            var setModel = function(value) {
                scope.model = value;   
            }
            
            $(elem).slider({
                range:'min',
                value:scope.value,
	            min: scope.config.min,
	            max: scope.config.max,
                step: scope.config.step,
                slide: function(event, ui) { 
                    if(ui.value < 1){
                            return false;;
                        }
                    scope.$apply(function() {
                        scope.value = ui.value;
                    });
                        
                    $('#YourDiv').css('width', (100 - (ui.value*100/scope.config.max)) +'%');
                    
            }
	        }).append('<div id="YourDiv" style:"width:50%;"></div>');
    	}
    }
});


    
});