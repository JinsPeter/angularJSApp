"use strict";
define(['angularAMD'], function (angularAMD) {
   angularAMD.service('userService', ['$http', '$q', 'configService',
        function ($http, $q, configService ) {

            var baseUrl = configService.getApiBaseUrl() + "Address/";
            return {
                submitAddress: function (address) {
                        var deferred = $q.defer();
                        var url = baseUrl + "SubmitAddress";

                        $http.post(url, address)
                            .then(function (data) {
                                deferred.resolve(data.data);
                            },function (err) {
                                debugger;
                                console.log(err);
                                deferred.reject(err);
                            });
                        return deferred.promise;
                }

            };
    }]);
});

