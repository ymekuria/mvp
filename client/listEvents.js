angular.module('musicTonight.listEvents', [])
  .controller('listEventsCtrl', function($scope, $location, Concerts){
    $scope.events = {};
    $scope.events =[1,2,4];
    $scope.zipcode;

    
    $scope.displayConcerts = function () {
    Concerts.getConcerts($scope.zipcode)
      .then(function (eventsObj) {
        $scope.events = eventsObj;


        console.log('scope.events:', $scope.events.events);
      })
      .catch(function (error) {
        console.error(error);
      });
     }; 

    // sends the user to a site to buy tickets in a seperate window
    $scope.buyTickets = function(url) {
      window.open(url);



    };

    $scope.venueMap = function(venue) {
      console.log('in venue')
      var venueParse = venue.split(" ");
      mapUrl = 'https://www.google.com/maps/place/'

      venueParse.forEach(function(str){
        mapUrl += str+ '+';
      });
      console.log('mapUrl', mapUrl);
      window.open(mapUrl);
    } 

   }); 







