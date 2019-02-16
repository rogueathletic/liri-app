
var fs = require("fs");
var searchSpotify = require("./searchSpotify");
var bands = require("./bandsInTown");
var omdb = require("./omdb");
function doWhatISay() {
    fs.readFile('./random.txt', 'utf8', function (err, contents) {
        fs.appendFile("log.txt", JSON.stringify(), function (err) {
          
        var random = contents.split(",");
        
        console.log(random[0]);
        console.log(contents.split(",")[1]);
        switch (random[0]) {
            case "spotify-this-song":
                searchSpotify(random[1]);
                break;
            case "concert-this":
                bands(random[1]);
                break;
            case "movie-this":
                omdb(random[1]);
                break;
            default:
                break;
        }
    });
});
}

module.exports = doWhatISay;

