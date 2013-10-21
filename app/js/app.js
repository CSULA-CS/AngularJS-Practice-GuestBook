'use strict';


// Declare app level module which depends on filters, directives, and services
angular.module('GuestBookApp', ['GuestBookApp.services', 'GuestBookApp.directives']).
  config(['$routeProvider', function($routeProvider) {
  	// As I mentioned before, each page may have individual logic which is why each page may have their specific
  	// controller being defined
  	$routeProvider.when(
    	'/start',
    	{
    		templateUrl: 'partials/start.html',
    		controller: 'StartPageCtrl'
    	}
    );
    $routeProvider.when(
    	'/radio',
    	{
    		templateUrl: 'partials/radio.html',
    		controller: 'RadioPageCtrl'
    	}
    );
    $routeProvider.when(
        '/climateControls',
        {
            templateUrl: 'partials/climate_controls.html',
            controller: 'ClimateControlPage'
        }
    );    
    $routeProvider.when(
        '/diagnostics',
        {
            templateUrl: 'partials/diagnostics.html',
            controller: 'DiagnosticPageCtrl'
        }
    );
    $routeProvider.when(
        '/map',
        {
            templateUrl: 'partials/map.html'
        }
    );
    $routeProvider.otherwise(
    	{
    		redirectTo: '/start'
    	}
    );
  }]);
