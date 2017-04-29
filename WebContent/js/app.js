'use strict';

var app = angular.module('app', [ 'ngRoute', 'controllers', 'services', 'businessServices', 'directives', 'dynform', 'filters']);

app.config([ '$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider.when('/', {
				templateUrl : 'partials/main.html',
				controller : 'MainCtrl'
			}).when('/login',{
				templateUrl : 'partials/login.html',
				controller : 'LoginCtrl'
			}).when('/logOut', {
                templateUrl: 'partials/login.html',
                controller: 'LogoutCtrl'
            }).when('/module', {
				templateUrl : 'partials/module.html',
				controller : 'ModuleCtrl'
			}).when('/addData', {
				templateUrl : 'partials/data.html',
				controller : 'DataCtrl'
			});
			$locationProvider.html5Mode(false).hashPrefix('!');
		} ]);