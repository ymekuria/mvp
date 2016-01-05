angular.module('musicTonight.services', [])
  .factory('getConcerts', function($http) {

    getConcerts = function (zip) {
      $http({
        method: GET,
        url: '/api.seatgeek.com/2/events?taxonomies.name=concert&postal_code=' + zip

      }).then(function(res){
        console.log(res.data)
        return resp.data;
      });
      // , function getConcertsError (){
      //   console.error('error getting the events');
      //   };
    };

    return {
      getConcerts: getConcerts
    };

  });

// .factory('Links', function ($http) {
//   // Your code here
//   var getAll = function () {
//     return $http({
//       method: 'GET',
//       url: '/api/links'
//     })
//     .then(function (resp) {
//       return resp.data;
//     });
//   };

//   var addOne = function (link) {
//     return $http({
//       method: 'POST',
//       url: '/api/links',
//       data: link
//     });
//     // .then(function (resp) {
//     //   return resp;
//   });


//   };

//   return {
//     getAll: getAll,
//     addOne: addOne
//   };
// })