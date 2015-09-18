// script.js

    // create the module and name it scotchApp
    var angularApp = angular.module('angularApp', ['ngRoute']);

    angularApp.config(function($routeProvider){
    	$routeProvider

	    	//Route for Home page
	    	.when('/', {
	    		templateUrl : 'pages/home.html',
	    		controller  : 'mainController'
	    	})

	    	//Route for About page
	    	.when('/info', {
	    		templateUrl : 'pages/info.html',
	    		controller  : 'aboutController'
	    	})

    });

    // create the controller and inject Angular's $scope
    angularApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    angularApp.controller('infoController', function($scope) {
    	$scope.message = 'This is the Info page.';
    });