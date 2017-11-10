'use strict';

card.controller('ShowCards', function ($scope, $window, $rootScope, $routeParams, getDatas, $location, $timeout, screen ) {
	$scope.words = [];
	$scope.CurrentElement = 0;
	$scope.dictionary = 'serb';

	var shuffleArray = function(array) {
		var m = array.length, t, i;
		while (m) {
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array;
	};
	getDatas(['datas/words.json']).then(function (data) {
		$scope.words = shuffleArray(data[0].vocabulary);
	}, function(error){
		console.log('error', error)
	});

});