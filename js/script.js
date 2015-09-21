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
	    	
	    	//Route for About page
	    	.when('/drinks', {
	    		templateUrl : 'pages/drinks.html',
	    		controller  : 'drinksController'
	    	})

    });

    // create the controller and inject Angular's $scope
    angularApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Lets find out if you have had enough drinks tonight to make yourself drunk. Click the link below to get started.';
        
        $('.meter-fill').height('420px');
        
    });

    angularApp.controller('infoController', function($rootScope,$scope,$location) {
    	$scope.message = 'This information will help us figure out how drunk you are.';
    	
    	$('.meter-fill').height('70px');
    	
    	$scope.addInfo = function (drinkerNameInput,drinkerSexInput,drinkerAgeInput,drinkerHeightInput,drinkerWeightInput,drinkerDrinkInput) {
	        $rootScope.Name = drinkerNameInput;
	        $rootScope.Sex = drinkerSexInput;
	        $rootScope.Age = drinkerAgeInput;
	        $rootScope.Height = drinkerHeightInput;
	        $rootScope.Weight = drinkerWeightInput;
	        $rootScope.Drink = drinkerDrinkInput;
	        
	        $location.path('/drinks/');
	    };
	    
	    
    });	
    
    angularApp.controller('drinksController', function($scope,$rootScope) {
    	$scope.message = 'Everytime you have a drink hit the have a drink button below';
    	
    	$('.meter-fill').height('15px');
    	$scope.DrinkCount = 0;
    	$scope.AlcoholDoseBeer = 12 * .05 * 0.789;
    	$scope.WeightNumber = parseInt($rootScope.Weight);
    	$scope.WeightInGrams = $scope.WeightNumber * 453.592;
    	$scope.GenderConstantMale = .69;
    	$scope.GenderConstantFemaile = .55;
    	if($rootScope.Sex == 'M') {
	    	$scope.WeightWithConstant = $scope.WeightInGrams * $scope.GenderConstantMale;
    	} else {
	    	$scope.WeightWithConstant = $scope.WeightInGrams * $scope.GenderConstantFemaile;
    	}
    	
    	$scope.addDrink = function () {
	    	
	    	$scope.DrinkCount += 1;
	        $scope.AlcoholConsumed = $scope.DrinkCount * $scope.AlcoholDoseBeer;  
	        $scope.AlcoholContentRaw =  $scope.AlcoholConsumed / $scope.WeightWithConstant;
	        $scope.BAC = $scope.AlcoholContentRaw * 100;
	    };
    		    
    });	