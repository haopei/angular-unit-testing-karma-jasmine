// create the omdb module with service
angular.module('omdb', [])
    .factory('omdbApi', function() {
        var service = {};

        service.search = function(query) {
            return {"Title":"Deadpool","Year":"2016","Rated":"R","Released":"12 Feb 2016","Runtime":"108 min","Genre":"Action, Adventure, Comedy","Director":"Tim Miller","Writer":"Rhett Reese, Paul Wernick, Fabian Nicieza (character), Rob Liefeld (character)","Actors":"Ryan Reynolds, Karan Soni, Ed Skrein, Michael Benyaer","Plot":"A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.","Language":"English","Country":"USA, Canada","Awards":"9 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQyODg5Njc4N15BMl5BanBnXkFtZTgwMzExMjE3NzE@._V1_SX300.jpg","Metascore":"65","imdbRating":"8.4","imdbVotes":"257,791","imdbID":"tt1431045","Type":"movie","Response":"True"};
        };

        service.searchById = function(id) {
            return {"Title":"Deadpool","Year":"2016","Rated":"R","Released":"12 Feb 2016","Runtime":"108 min","Genre":"Action, Adventure, Comedy","Director":"Tim Miller","Writer":"Rhett Reese, Paul Wernick, Fabian Nicieza (character), Rob Liefeld (character)","Actors":"Ryan Reynolds, Karan Soni, Ed Skrein, Michael Benyaer","Plot":"A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.","Language":"English","Country":"USA, Canada","Awards":"9 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQyODg5Njc4N15BMl5BanBnXkFtZTgwMzExMjE3NzE@._V1_SX300.jpg","Metascore":"65","imdbRating":"8.4","imdbVotes":"257,791","imdbID":"tt1431045","Type":"movie","Response":"True"};
        };

        return service;
    });

