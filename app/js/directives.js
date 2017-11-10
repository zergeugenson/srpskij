card.directive("drawWord", function(){
	return {
		restrict: 'EA',
		scope: {
			words: '=',
			el: '=',
			dictionary: '='
		},
		template: '<span>{{display(words[el])}}</span>',
		link: function(scope, element, attributes) {
			scope.display = function(word){
				if(!word) return;
				scope.q = word[scope.dictionary].split('').map(function(letter, i){
					if(i != word.accentuation[0]-1) {
						return '<span>'+letter+'</span>';
					}
					return '<span class="accentuation '+ word.accentuation[1] + '">'+letter+'</span>';
				});
				element.html(scope.q.join(''))
			};
		}
	}
});
card.directive("moveWords", function(){
	return {
		restrict: 'C',
		link: function(scope, element, attributes){
			element.bind('click', function(event){
				scope.CurrentElement+=parseInt(attributes.direction);
				if(scope.CurrentElement<0) scope.CurrentElement = scope.words.length-1;
				if(scope.CurrentElement>=scope.words.length) scope.CurrentElement = 0;
				scope.$apply();
			})
		}


	}
});