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
                console.log("                               ");
                console.log(">----------BANDS--------------<");
                console.log(">----------IN-----------------<");
                console.log(">----------TOWN---------------<");
                console.log(">----------API----------------<");
                console.log(">----------SEARCH-------------<");
                console.log(">----------RESULTS------------<");
                console.log("                               ");
                console.log('data[i].venue.name:', data[i].venue.name);
                console.log('data[i].venue.city:', data[i].venue.city);
                console.log('data[i].datetime:'  , data[i].datetime  );
                console.log("                               ");
                console.log(">----------BANDS--------------<");
                console.log(">----------IN-----------------<");
                console.log(">----------TOWN---------------<");
                console.log(">----------API----------------<");
                console.log(">----------SEARCH-------------<");
                console.log(">----------END----------------<");
                console.log("                               ");
            }
        })

        .catch(function (error) {
            if (bands === "") {


            }
            console.log("you have an error", error);

        });
}
module.exports = bands;