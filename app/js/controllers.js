'use strict';

/* Controllers */

function MainCtrl($scope, GuestBookStashData) {
	// What data is being hold in this scope
	// While thinking about scope, remind yourself where the scope is defined
	// For our case, the controller is defined under body tag
	// Which means each element or directive under the body tag can read data from this scope
	// 
	// If you have any further questions on scope feel free to ask me on google hangout by Eric
	
	// In short this is the comments you will be getting from services,
	// look into services.js for more detail
	$scope.comments = [
    {"name": "John Doe",
     "comment": "Fast just got faster"},
    {"name": "Jane Doe",
     "comment": "The Next, Next Generation"},
  ];
	$scope.comments = GuestBookStashData.getComments();
}

function ListCommentCtrl($scope) {
	
}

function CreateCommentCtrl($scope) {
	
}

function EditCommentCtrl($scope) {
	
}