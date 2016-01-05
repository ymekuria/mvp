angular.module('musicTonight', ['musicTonight.services','musicTonight.listEvents', 'ngRoute' ])
  // TODO - add routes here
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/events.html',
      controller: 'listEventsCtrl'
    });
      
      
  

  });

