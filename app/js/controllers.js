'use strict';

card.controller('ShowCards', function ($scope, $window, $rootScope, $routeParams, getDatas, $location, $timeout, screen ) {
	getDatas(['datas/words.json']).then(function (data) {
		$scope.words = data[0].vocabulary;
		console.dir($scope.words);
	}, function(error){
		console.log('error', error)
	})
});