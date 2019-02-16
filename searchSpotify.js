var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
function searchSpotify(construct) {
  fs.appendFile("log.txt", JSON.stringify(response.data), function (err) {
    if (err) {
      console.log("error oh my: ", err);
    } else {
      // console.log(response.data); /* when un comented out this will give evrerything */
    }
  });
  var artist = construct;
  spotify.search({
      type: 'track',
      query: artist
    },
    function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
	// If no song is provided, LIRI defaults to 'The Sign' by Ace Of Base
      // console.log( "All Tracks:", data.tracks.items );
      var track = (data.tracks.items[0]);
      console.log("Artists Name: ", track.artists[0].name);
      console.log("Song Name: ", track.name);
      console.log("Track Preview link: ", track.preview_url);
      console.log("Name Of the album: ", track.album.name);
    });

}

module.exports = searchSpotify;

//   If no song is provided then your program will default to "The Sign" by Ace of Base.

