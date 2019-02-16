var axios = require("axios");

function bands(query) {
    var artist = query;
    console.log(artist);
    axios({
            url: "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=trilogy",
            method: "get"
        })
        .then(function (response) {
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