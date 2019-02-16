var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");




  function searchSpotify(construct) {
    if (!searchSpotifyIsUndefined(construct)) {

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
}

function searchSpotifyIsUndefined(inputParam) {
  if (inputParam === undefined) {
    inputParam = "Brohym";
    console.log("                                ");
    console.log(">----------YOUR----------------<");
    console.log(">----------DID'T---------------<");
    console.log(">----------TYPE----------------<");
    console.log(">----------ANYTHING------------<");
    console.log(">--------- OR------------------<");
    console.log(">----------YOUR----------------<");
    console.log(">----------Song----------------<");
    console.log(">----------WASN'T--------------<");
    console.log(">----------FOUND---------------<");
    console.log("                                ");
    fs.appendFileSync("log.txt", "-----------------------\n");
    console.log("You should listen to Brohym by 'Pennywise' since we cant find what you typed");
    fs.appendFileSync("log.txt", "You should listen to 'Pennywise' since we cant find what you typed" + "\n");
    console.log("It's punk, thats cool!");
    console.log("              :)                ");
    fs.appendFileSync("log.txt", "It's neato!\n");
    return true;
  }
  return false;
}
module.exports = searchSpotify;