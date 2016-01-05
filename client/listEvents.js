angular.module('musicTonight.listEvents', [])
  .controller('listEventsCtrl', function($scope, $location, Concerts){
    $scope.events = {};
    $scope.events =[1,2,4];
    $scope.zipcode;


    $scope.displayConcerts = function (zipcode) {
    Concerts.getConcerts($scope.zipcode)
      .then(function (eventsObj) {
        $scope.events = eventsObj;
        console.log('scope.events:', $scope.events.events);
      })
      .catch(function (error) {
        console.error(error);
      });
     }; 

    // };
    
    // init();  

    $scope.buyTickets = function(url) {
      console.log('url',url);

      $window.open(url);

    };

   }); 







