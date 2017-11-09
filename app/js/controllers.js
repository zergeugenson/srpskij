'use strict';

ryleev.controller('LentaCtrl', function ($scope, $window, $rootScope, $routeParams, $location, $timeout, screen ) {
	console.log('Start lenta', $scope);
	$scope.tiles = [
		{
			id:0,
			title:"первый"
		},
		{
			id:1,
			title:"второй",
			img:"img/jlp.jpg"
		},
		{
			id:2,
			title:"третий"
		},
		{
			id:3,
			title:"четвертый"
		}
	]
});