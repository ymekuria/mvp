angular.module('musicTonight.services', [])
  .factory('Concerts', function($http) {

    getConcerts = function (zip) {
      return $http({
        method: 'GET',
        url: 'http://api.seatgeek.com/2/events?taxonomies.name=concert&postal_code=' + zip

      }).then(function(res){
        return res.data;
      });
      
    };

    return {
      getConcerts: getConcerts
    };

  });
