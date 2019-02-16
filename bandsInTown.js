var axios = require("axios");
var fs = require("fs");
function bands(query) {
    var artist = query;
    console.log(artist);
    if (!bandIsUndefined(artist)) {

        axios({
                url: "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=trilogy",
                method: "get"
            })
            .then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    console.log("/n                             ");
                    console.log(">----------BANDS--------------<");
                    console.log(">----------IN-----------------<");
                    console.log(">----------TOWN---------------<");
                    console.log(">----------API----------------<");
                    console.log(">----------SEARCH-------------<");
                    console.log(">----------RESULTS------------<");
                    console.log("                               ");
                    console.log('data[i].venue.name:', data[i].venue.name);
                    console.log('data[i].venue.city:', data[i].venue.city);
                    console.log('data[i].datetime:', data[i].datetime);
                    console.log("                               ");
                    console.log(">----------BANDS--------------<");
                    console.log(">----------IN-----------------<");
                    console.log(">----------TOWN---------------<");
                    console.log(">----------API----------------<");
                    console.log(">----------SEARCH-------------<");
                    console.log(">----------END----------------<");
                    console.log("/n                             ");
                }
            });

    }
}
function bandIsUndefined(inputParam) {
    if (inputParam === undefined) {
        inputParam = "Backstreet Boys";
        console.log("                                ");
        console.log(">----------YOUR----------------<");
        console.log(">----------DID'T---------------<");
        console.log(">----------TYPE----------------<");
        console.log(">----------ANYTHING------------<");
        console.log(">--------- OR------------------<");
        console.log(">----------YOUR----------------<");
        console.log(">----------MOVIE---------------<");
        console.log(">----------WASN'T--------------<");
        console.log(">----------FOUND---------------<");
        console.log("                                ");
        fs.appendFileSync("log.txt", "-----------------------\n"                                                );
        console.log("If you love awkward old men dancing then you should check out Back Street Boys"                        );
        fs.appendFileSync("log.txt", "If you love awkward old men dancing then you should check this out" + "\n");
        console.log("It's awkward!");
        console.log("              :)                ");
        fs.appendFileSync("log.txt", "It's awkward!\n");
        return true;
    }
    return false;
}

module.exports = bands;