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
	    		controller  : 'infoController'
	    	})

    });

    // create the controller and inject Angular's $scope
    angularApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Lets find out if you have had enough drinks tonight to make yourself drunk. Click the link below to get started.';
        
        $('.meter-fill').height('420px');
        
    });

    angularApp.controller('infoController', function($scope) {
    	$scope.message = 'This information will help us gage how drunk you are.';
    	
    	$('.meter-fill').height('70px');
    	
    	$scope.addInfo = function (drinkerNameInput,drinkerSexInput,drinkerAgeInput,drinkerHeightInput,drinkerWeightInput,drinkerDrinkInput) {
	        $scope.Name = drinkerNameInput;
	        $scope.Sex = drinkerSexInput;
	        $scope.Age = drinkerAgeInput;
	        $scope.Height = drinkerHeightInput;
	        $scope.Weight = drinkerWeightInput;
	        $scope.Drink = drinkerDrinkInput;
	    };
    });	