'use strict';


// Declare app level module which depends on filters, directives, and services
angular.module('GuestBookApp', ['GuestBookApp.services']).
  config(['$routeProvider', function($routeProvider) {
  	// As I mentioned before, each page may have individual logic which is why each page may have their specific
  	// controller being defined
  	$routeProvider.when(
    	'/listComment',
    	{
    		templateUrl: 'partials/listComment.html',
    		controller: 'ListCommentCtrl'
    	}
    );
    $routeProvider.when(
    	'/admin',
    	{
    		templateUrl: 'partials/admin.html',
    		controller: 'AdminCommentCtrl'
    	}
    );
    $routeProvider.otherwise(
    	{
    		redirectTo: '/listComment'
    	}
    );
  }]);
