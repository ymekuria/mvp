angular.module('musicTonight.listEvents', [])
  .controller('listEventsCtrl', function($scope, Concerts){
    $scope.events = {};

    var init = function () {
    Concerts.getConcerts(94118)
      .then(function (eventsObj) {
        $scope.events.events = eventsObj;
        console.log('scope.events:', $scope.events);
      })
      .catch(function (error) {
        console.error(error);
      });
    };
    
    init();  

   }); 







