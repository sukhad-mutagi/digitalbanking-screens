'use strict';

/*config for adding css files to html pages*/

var digitalbankingConfig=angular.module('digitalbankingConfig',[]);

digitalbankingConfig.config(['$routeProvider',function($routeProvider){
	$routeProvider
	 .when('/src/main/webapp', {
         templateUrl: 'includes/login.html', 
         controller: 'loginCtrl',
         css: 'css/bootstrap.min.css'
     })
}]);
