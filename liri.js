// for readability purposes I am keeping all statements to one line via my monitor size
// this file in simple terms would be considreed the root file for this app, it is the hub for all other pages
// you will see below in the "require statements i am calling from each individual api call page
// the seperation was done so as a practical application for learning to work with larger programs
// by seperating each API, it is easier for me to walk through the program and target specific parts of it
require("dotenv").config();

var searchSpotify = require("./searchSpotify");  // calls from the spotify API page
var bands = require("./bandsInTown");  // calls from the Bands In Town API page
var omdb = require("./omdb");  // calls from the OMDB API page
var doWhatISay = require("./doWhatISay");   // calls from the alt spotify page Do what i say API page
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
    break;
    case "do-what-i-say":
    doWhatISay();
    break;
  default:
    break;
}