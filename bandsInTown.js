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
                    console.log("                               ");
                    console.log(">----------BANDS--------------<");
                    console.log(">----------IN-----------------<");
                    console.log(">----------TOWN---------------<");
                    console.log(">----------API----------------<");
                    console.log(">----------SEARCH-------------<");
                    console.log(">----------RESULTS------------<");
                    console.log("                               ");
                    console.log('Venue name: ', data[i].venue.name);
                    console.log('City: ', data[i].venue.city);
                    console.log('data & time: ', data[i].datetime);
                    console.log("                               ");
                    console.log(">----------END----------------<");
                    console.log("                               ");
                    // fs. code below will append to the log.txt file
                    fs.appendFileSync("log.txt", "-----------------------\n");
                    fs.appendFileSync("log.txt", data[i].venue.name);
                    fs.appendFileSync("log.txt", "-----------------------\n");
                    fs.appendFileSync("log.txt", data[i].venue.city);
                    fs.appendFileSync("log.txt", "-----------------------\n");
                    fs.appendFileSync("log.txt", data[i].datetime);
                    fs.appendFileSync("log.txt", "-----------------------\n");
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
        console.log(">----------BAND_---------------<");
        console.log(">----------WASN'T--------------<");
        console.log(">----------FOUND---------------<");
        console.log("                                ");
        fs.appendFileSync("log.txt", "-----------------------\n");
        console.log("If you love awkward old men dancing then you should check out Back Street Boys");
        fs.appendFileSync("log.txt", "If you love awkward old men dancing & singing songs they didnt write then you should check this out: html://bit.ly/B-S__B" + "\n");
        fs.appendFileSync("log.txt", "-----------------------\n");
        console.log("so awkward!");
        console.log("                                    ");
        console.log("               :)                   ");
        console.log("                                    ");
        fs.appendFileSync("log.txt", "They Are awkward!\n");
        fs.appendFileSync("log.txt", "-----------------------\n");
        return true;
    }
    return false;
}

module.exports = bands;
