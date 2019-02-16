var axios = require("axios");
var fs = require("fs");
function bands(query) {
    var artist = query;
    console.log(artist);
    axios({
            url: "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=trilogy",
            method: "get"
        })
        .then(function (response) {
            fs.appendFile("log.txt", JSON.stringify(response.data), function (err) {
                if (err) {
                  console.log("error oh my: ", err);
                } else {
                  // console.log(response.data); /* when un comented out this will give evrerything */
                }
              });
            var data = response.data;
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].venue.name, data[i].venue.city, data[i].datetime);
                console.log(data[i].venue.name);
                console.log(data[i].venue.city);
                console.log(data[i].datetime);
            }
        });

        if (data === '') {
            data = 'Flavor Flav';
        } else {
            data = song;
        }
            console.log("you have an error", error);

        
}
module.exports = bands;