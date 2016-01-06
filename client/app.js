angular.module('musicTonight', ['musicTonight.services','musicTonight.listCalender','musicTonight.listEvents', 'ngRoute' ])
  // // TODO - add routes here
  // .run(function ($rootScope) {
  //   $rootScope.calender= [];
  // })
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/events.html',
      controller: 'listEventsCtrl'
    })
    .when('/calender', {
      templateUrl: '/calender.html',
      controller: 'calenderCtrl'

    });

  });

