angular.module('musicTonight.services', [])
  .factory('Concerts', function($http) {

   var getConcerts = function (zip) {
      return $http({
        method: 'GET',
        url: 'http://api.seatgeek.com/2/events?taxonomies.name=concert&postal_code=' + zip

      }).then(function (res) {
        return res.data;
      });
      
    };

    return {
      getConcerts: getConcerts
    };

  })
  .factory('Calender', function(){

    var postToCalender = function (listing) {
     return $http({
          method: 'POST',
          url: 'api/calender',
          data: listing

        }).then(function (res) {
          return res.data;
        });
      };

      

      return {
        postToCalender: postToCalender
      };
  });
