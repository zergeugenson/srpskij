'use strict';

var card = angular.module('Card', [ 'ngRoute' ])
  .value(
    'screen', {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }
)
.config(['$routeProvider', '$locationProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'templates/card.html',
      controller: 'ShowCards'
    })
    .otherwise({
      redirectTo: '/'
  })
}])
.run(function($rootScope, $routeParams){
  console.log('Start script', $rootScope, $routeParams)
});

