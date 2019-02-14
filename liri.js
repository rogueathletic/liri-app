// import axios from "axios";
// var Spotify = require("node-spotify-api");
require("dotenv").config();

// console.log(keys)

// var spotify = new Spotify(keys.spotify);

var searchSpotify = require("./searchSpotify")
var bands = require("./bandsInTown")

var something = process.argv[2];
switch (something) {
  case "spotify-this-song":
    searchSpotify(process.argv[3]);
    break;
  case "concert-this":
    bands(process.argv[3]);
    break;
    case "movie-this":
    omdb(process.argv[3]);
    // break;
    // case "do-what-say":
    // searchLiri(process.argv[3]);
    // break;
  default:
    break;
}