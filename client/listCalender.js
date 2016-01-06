angular.module('musicTonight.listCalender', [])
  .controller('calenderCtrl', function($rootScope, $scope, $location){
    
    $scope.calList = $rootScope.calender;
    // $scope.calEvents = Calender.calender;

    $scope.venueMap = function(venue) {
      console.log('venue', venue);
      var venueParse = venue.split(" ");
      mapUrl = 'https://www.google.com/maps/place/';

      venueParse.forEach(function(str){
        mapUrl += str+ '+';
      });
      
      window.open(mapUrl);
    };

    $scope.buyTickets = function(url) {
      console.log('url', url);
      window.open(url);

    }; 
    

  });