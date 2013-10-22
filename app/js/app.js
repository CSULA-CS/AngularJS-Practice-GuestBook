'use strict';


// Declare app level module which depends on filters, directives, and services
angular.module('GuestBookApp', ['GuestBookApp.services']).
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
    		controller: 'RadioCtrl'
    	}
    );
    $routeProvider.when(
        '/climateControls',
        {
            templateUrl: 'partials/climate_controls.html',
            controller: 'climateControlCtrl'
        }
    );    
    $routeProvider.when(
        '/diagnostics',
        {
            templateUrl: 'partials/diagnostics.html',
            controller: 'DiagnosticCtrl'
        }
    );
    $routeProvider.otherwise(
    	{
    		redirectTo: 'partials/start'
    	}
    );
  }]);
