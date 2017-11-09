'use strict';

var ryleev = angular.module('Ryleev', [ 'ngRoute' ])
  .value(
    'screen', {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }
)
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'templates/card.html',
      controller: 'LentaCtrl'
    })
    .otherwise({
      redirectTo: '/'
  })
}])
.run(function($rootScope, $routeParams){
  console.log('Start script', $rootScope, $routeParams)
});

