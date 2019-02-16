var axios = require("axios");
var fs = require("fs");
function omdb(query) {
    var movie = query;
    
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
                } else {
                  // console.log(response.data); /* when un comented out this will give evrerything */
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

        // .catch(function (error) {
        //     if (omdb === "") {
        //       console.log("you have an error", error);
        //     }
        // });


  
}
module.exports = omdb;




          //  function (err, data) {
          //     if (err) {
          //       return console.log('Error occurred: ' + err);
          //     }}

















// var axios = require("axios");
// function omdb(query) {
//     var key = process.env.KEY;
//     var movie = query;
//     console.log(movie);

	
// 	if (movie === '') {
// 		search = 'Pee Wee Hermans Big Adventure';
// 	} else {
// 		search = movie;
// 	}

// axios({
//      url: `http://www.omdbapi.com/?apikey=${key}&${movie}`,
// method: `get`
// })
// .then(function (response) {
//     var data = response.data;
//     for (var i = 0; i < data.length; i++){
//     console.log("Movie title: ", data[i].title)
//     console.log("Year movie was released: ", data[i].year)
//     console.log("Movie rating: ", data[i].rated)
//     console.log("Rotten Timmatoes rating: ", data[i].ratings[1].value)
//     console.log("Country the movie was made: ", data[i].country)
//     console.log("Language the movie was filmed in: ", data[i].language)
//     console.log("The Plot of the movie: ", data[i].plot)
//     console.log("The key: ", data[i].actors)
//   }})
//   .catch(function (error) {
//     console.log("you have an error", error);
//   })
// }
// module.exports = omdb;
