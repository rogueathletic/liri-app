var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

function searchSpotify(construct) {
  var artist = construct;
  spotify.search({
      type: 'track',
      query: artist
    },
    function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }

      
      // console.log( "All Tracks:", data.tracks.items );
      var track = (data.tracks.items[0]);
      console.log("                               ");
      console.log(">----------SPOTIFY------------<");
      console.log(">----------THIS---------------<");
      console.log(">----------SONG---------------<");
      console.log(">----------API----------------<");
      console.log(">----------SEARCH-------------<");
      console.log(">----------RESULTS------------<");
      console.log("                               ");
      console.log("Artists Name:       ", track.artists[0].name);
      console.log("Song Name:          ", track.name);
      console.log("Track Preview link: ", track.preview_url);
      console.log("Name Of the album:  ", track.album.name);
      console.log("                               ");
      console.log(">----------SPOTIFY------------<");
      console.log(">----------THIS---------------<");
      console.log(">----------SONG---------------<");
      console.log(">----------API----------------<");
      console.log(">----------SEARCH-------------<");
      console.log(">----------END----------------<");
      console.log("                               ");

      
    });

}
module.exports = searchSpotify;

//   If no song is provided then your program will default to "The Sign" by Ace of Base.
if(track=== ""){

}