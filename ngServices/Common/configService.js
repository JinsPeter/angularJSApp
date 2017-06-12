"use strict";
define(['angularAMD'], function (angularAMD) {
   angularAMD.service('configService', function () {
        var localizeService = function(){

            
        }();

        return {
            getApiBaseUrl : function () {
                return "http://localhost:63151/Api/";
            }
        };
       


   });
});