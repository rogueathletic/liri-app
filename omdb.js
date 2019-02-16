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


        


  
}

function movieIsUndefined(inputParam) {
  if (inputParam === undefined) {
      inputParam = "Mr. Nobody";
      console.log("-----------------------");
      fs.appendFileSync("log.txt", "-----------------------\n");
      console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      fs.appendFileSync("log.txt", "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/" + "\n");
      console.log("It's on Netflix!");
      fs.appendFileSync("log.txt", "It's on Netflix!\n");
      return true;
  }
  return false;
}

module.exports = omdb;
