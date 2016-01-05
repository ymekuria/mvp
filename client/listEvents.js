angular.module('musicTonight.listEvents', [])
  .controller('listEventsCtrl', function($scope, $location, Concerts){
    $scope.events = {};
    $scope.eventss =[1,2,4];


    var init = function () {
    Concerts.getConcerts(94118)
      .then(function (eventsObj) {
        $scope.events = eventsObj;
        console.log('scope.events:', $scope.events.events);
      })
      .catch(function (error) {
        console.error(error);
      });


    };
    
    init();  

    var buyTickets = function(url) {
      console.log('url',url);

      $window.open(url);

    };

   }); 







