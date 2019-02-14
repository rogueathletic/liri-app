var axios = require("axios");


function omdb(query){
    
    var two = "searchParam"
axios({
     url: `http://www.omdbapi.com/query=` + process.env.KEY +,
method: `get`
})
console.log(omdbGet)
.then(function (response) {
    var data = response.data;
    for (var i = 0; i < data.length; i++){
    console.log("Movie title: ", data[i].title)
    console.log("Year movie was released: ", data[i].year)
    console.log("Movie rating: ", data[i].rated)
    console.log("Rotten tommatoes rating: ", data[i].ratings[1].value)
    console.log("Country the movie was made: ", data[i].country)
    console.log("Language the movie was filmed in: ", data[i].language)
    console.log("The plot of the movie: ", data[i].plot)
    console.log("The key mactors in teh movie: ", data[i].actors)




  }})
  .catch(function (error) {
    console.log("you have an error", error);
  })
}
export default omdb;

// Title of the movie.
// Year the movie came out.
// IMDB Rating of the movie.
// Rotten Tomatoes Rating of the movie.
// Country where the movie was produced.
// Language of the movie.
// Plot of the movie.
// Actors in the movie.

