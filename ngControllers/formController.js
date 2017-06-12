"use strict";
define(['angularAMD','userService'],function (angularAMD) {
    angularAMD.controller('FormController',['$scope', 'userService',function ($scope, userService) {
        
        var self = this;
        self.userDetail = {};
        
        self.submitDetails = function () {
            userService.submitAddress(self.userDetail)
            .then(function(data){
                alert("success");
                
            },function(msg){
                console.log(msg+"1");
                alert("Thats an Error: Msg:" + msg);
            });
        };
    }]);
    
});
