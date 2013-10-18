'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('GuestBookApp.services', []).
  value('version', '0.1')
  .factory('GuestBookStashData', function() {
  	// This is the sample json file I set up for you to play around, will be sent to controller file.
  	// var comments = [
  	// 	{
  	// 		poster : 'Eric Liao',
  	// 		content: 'Hello, World'
  	// 	},
  	// 	{
  	// 		poster : 'Eric Liao',
  	// 		content: 'This is another test message!'
  	// 	}
  	// ];

  	// return {
  	// 	getComments: function() {
  	// 		return comments;
  	// 	},
  	// 	comments : comments
  	// };
  });
