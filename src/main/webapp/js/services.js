'use strict';

/* Services */
var digitalbankingServices = angular.module('digitalbankingServices', [ 'ngResource' ]);

digitalbankingServices.factory('LoginService',['$http','$location','$rootScope', function($http, $location, $rootScope) {
	var service = {};
	service.Login = function(username, password) {
		return $http.post('webapi/security/authenticate', {
			userName : username,
			password : password
		});
	};
	service.isLoggedIn = function() {		
		$http.defaults.headers.common.authToken = sessionStorage.authToken;
		return $http.post('webapi/security/isLoggedIn');
	};
	return service;
}]);

digitalbankingServices.factory('User', [function() {
	var sdo = {
		isLogged: false,
		username: '',
		password: ''
	};
	return sdo;
}]);

digitalbankingServices.factory('AccountsService',['$http','$location','$rootScope', '$q', function($http, $location, $rootScope) {

    var service = {};
    service.getAccountSummary = function(username, password) {
            return $http.get('/accservices/556677/accounts');
    };

    return service;
}]);
