angular.module('musicTonight.listEvents', [])
  .controller('listEventsCtrl', function($rootScope, $scope, $location, Concerts, Calender){
    $scope.events = {};
    $rootScope.calender = [];
    $scope.zipcode;
    $scope.test=
   
    

    
    $scope.displayConcerts = function () {
    Concerts.getConcerts($scope.zipcode)
      .then(function (eventsObj) {
        $scope.events = eventsObj;
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
      console.log('in venue');
      var venueParse = venue.split(" ");
      mapUrl = 'https://www.google.com/maps/place/';

      venueParse.forEach(function(str){
        mapUrl += str+ '+';
      });
     
      window.open(mapUrl);
    }; 

    $scope.addToList = function(artist, venue, city, date, address, buyUrl) {
      
      var listing = {};
      listing.artist = artist;
      listing.venue = venue;
      listing.city = city;
      listing.date = date;
      listing.address = address;
      listing.buyUrl = buyUrl;
      console.log('listing', listing);

      $rootScope.calender.push(listing);
      
      //$scope.calender.push($scope.listing);
      console.log('scope.calender', $rootScope.calender);
 
      // var addListingtoCal = function( $scope.listing) {
      //   Calender.postToCalender($scope.listing);
      // }
    };

    $scope.viewCalender= function () {
      console.log('inside view calender');
      $location.path('/calender');
    };




   });
  // .factory('CalData', function (){
  //     var calList = $scope.calender;
  //     return 
  //     {
  //       calList: calList
  //     }
  //   });

  
  // });
     







