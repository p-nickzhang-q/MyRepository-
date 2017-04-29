'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', [ '$scope', 'checkCreds', '$location', function($scope, checkCreds, $location) {
	if(!checkCreds()){
		$location.path("/login");
	}
	var menus = [{
		"menuName" : "add mudule",
		"href" : "#!"
	},{
		"menuName" : "add user",
		"href" : "#!"
	},{
		"menuName" : "add permission",
		"href" : "#!"
	},{
		"menuName" : "add menu",
		"href" : "#!"
	},{
		"menuName" : "logOut",
		"href" : "#!/logOut"
	}];
	sessionStorage.menus = angular.toJson(menus);
	$scope.moduleList = [ {
		"_id" : "56b161ba2ffce1ddf7546bfa",
		"moduleName" : "Student",
		"dataType" : "student"
	} ];
	
	$scope.openModule = function(_id){
		$location.path("/module");
		//根据id，得到module data
		var module = {
			"_id" : "56b161ba2ffce1ddf7546bfa",
			"moduleName" : "Student",
			"dataType" : "student",
			"menus" : [{
				"menuName" : "add student",
				"href" : "#!/addData",
				"click" : "addData(href)"
			},{
				"menuName" : "logOut",
				"href" : "#!/logOut"
			}]
		};
		sessionStorage.module = angular.toJson(module);
	}
} ]);

controllers.controller('ModuleCtrl', [ '$scope', 'checkCreds', '$location', function($scope, checkCreds, $location) {
	if(!checkCreds()){
		$location.path("/login");
	}
	var module = angular.fromJson(sessionStorage.module);
	$scope.module = module;
	sessionStorage.menus = angular.toJson(module.menus);
	$scope.datas = [{
		"_id" : "1",
		"studentName" : "xiao ming",
		"age" : 20,
		"major" : "语文"
	},{
		"_id" : "2",
		"studentName" : "da ming",
		"age" : 28,
		"major" : "英语"
	}];
	$scope.titles = Object.keys($scope.datas[0]);
	$scope.addData = function(href){
		alert(href);
	}
} ]);

controllers.controller('DataCtrl', [ '$scope', function($scope) {
	sessionStorage.menus = angular.toJson([]);
} ]);

controllers.controller('rootCtrl', [ '$scope', function($scope) {
	
} ]);

controllers.controller('LoginCtrl', [ '$scope', '$location', 'Login',
		'setCreds', 'checkCreds',
		function LoginCtrl($scope, $location, Login, setCreds, checkCreds) {
			if (checkCreds()) {
				$location.path('/');
			}
			$scope.submit = function() {
				var postData = {
					username : $scope.username,
					password : $scope.password
				};
				if (postData.username == "zh" && postData.password == "123") {
					setCreds($scope.username, $scope.password)
					$location.path('/');
				} else {
					$scope.error = "Login Failed"
				}
			};
		} ]);

controllers.controller('LogoutCtrl', [ '$location', 'deleteCreds',
		function($location, deleteCreds) {
			deleteCreds();
			$location.path('/login');
		} ]);
