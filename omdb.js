var axios = require("axios");
var fs = require("fs");

function omdb(query) {
  var movie = query;

  if (!movieIsUndefined(movie)) {
    // console.log(movie);
    axios({
        url: "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy",
        method: "get"
      })
      .then(function (response) {
        // var data = response.data;

        fs.appendFile("log.txt", JSON.stringify(response.data), function (err) {
          if (err) {
            console.log("error oh my: ", err);
          } 
        });

        console.log("                               ");
        console.log(">----------THE----------------<");
        console.log(">----------OPEN---------------<");
        console.log(">----------MOVIE--------------<");
        console.log(">----------DATABASE-----------<");
        console.log(">----------SEARCH-------------<");
        console.log(">----------RESULTS------------<");
        console.log("                               ");
        console.log("The title of the movie is:     ", response.data.Title);
        console.log("The actors in the movie are:   ", response.data.Actors);
        console.log("The IMDB rating is:            ", response.data.Ratings[0].Value);
        console.log("The Rotten Tomatoes rating is: ", response.data.Ratings[1].Value);
        console.log("The Country of origin is:      ", response.data.Country);
        console.log("The Movie was filmed in :      ", response.data.Language);
        console.log("The plot of the movie is:      ", response.data.Plot);
        console.log("                               ");
        console.log(">----------THE----------------<");
        console.log(">----------OPEN---------------<");
        console.log(">----------MOVIE--------------<");
        console.log(">----------DATABASE-----------<");
        console.log(">----------END----------------<");
        console.log("                               ");
      });
  }

  function movieIsUndefined(inputParam) {
    if (inputParam === undefined) {
      inputParam = "Rubber";
      console.log("                                 ");
      console.log(">----------YOUR-----------------<");
      console.log(">----------DID'T----------------<");
      console.log(">----------TYPE-----------------<");
      console.log(">----------ANYTHING-------------<");
      console.log(">--------- OR-------------------<");
      console.log(">----------YOUR-----------------<");
      console.log(">----------MOVIE----------------<");
      console.log(">----------WASN'T---------------<");
      console.log(">----------FOUND----------------<");
      console.log("                                 ");
      fs.appendFileSync("log.txt", "-----------------------\n");
      console.log("You should watch the movie Rubber. Youll never be the same after. here is a link to the trailor: http://bit.ly/rubber__trailor");
      fs.appendFileSync("log.txt", "If you haven't watched 'Rubber,' then you should: http://bit.ly/rubber__trailor" + "\n");
      console.log("It's on Netflix!");
      fs.appendFileSync("log.txt", "It's on Netflix!\n");
      console.log("                                   ");
      console.log("               :)                  ");
      console.log("                                  ");
      return true;
    }
    return false;
  }
}

module.exports = omdb;
