angular.module('musicTonight.services', [])
  .factory('getConcerts', function($http) {

    getConcerts = function (zip) {
      $http({
        method: GET,
        url: '/api.seatgeek.com/2/events?taxonomies.name=concert&postal_code=' + zip

      }).then(function(res){
        //console.log(res.data);
        return resp.data;
      });
      
    };

    return {
      getConcerts: getConcerts
    };

  });
