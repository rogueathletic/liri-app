var axios = require("axios");
// import axios from "axios";
var Spotify = require("node-spotify-api");
require("dotenv").config();
var keys = require("./keys.js");
// console.log(keys)

var spotify = new Spotify(keys.spotify);


var something = process.argv[2];
if (something === "concert-this"){
var artist = process.argv[3];
console.log(artist)
    axios({
    url: "https://https://rest.bandsintown.com/artists/" + artist + "/events?app_id=trilogy",
    method: "get"
})
.then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log("you have an error", error);
  })
}