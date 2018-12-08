
//add code to read and set any environment variables with the dotenv package
require("dotenv").config();

//for random.txt
var randomText = require("./random.txt");

// to write to text files
var fs = require("fs");

// Dependency for inquirer npm package
var inquirer = require("inquirer");

// Include the axios package
var axios = require("axios");

// BandsInTown
var bandsintown = require('bandsintown')("bootcamp");

// spotify package
var Spotify = require('node-spotify-api');

//import the keys.js file and store it in a variable
var keys = require("./keys.js");

//you should then be able to access like so
spotify = new Spotify(keys.spotify);




//Make it so liri.js can take in one of the following commands: concert-this, spotify-this-song, movie-this, do-what-it-says

// Grabbing command line arguments for type and target
// 'concert-this'/'spotify-this-song'/'movie-this'/'do-what-it-says'
var type = process.argv[2];
// <artist/band name here>/<song name here>/<movie name> etc
var target = process.argv.slice(3).join(" ");

if (type == "spotify-this-song" || type == "do-what-it-says") {


    if (type == "do-what-it-says") {

        spotify.search({ type: 'track', query: randomText }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            fs.appendFileSync("written.txt", (JSON.stringify(data, null, 2)));

            console.log("Artist or Band: ");
            console.log(JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2));
            console.log("Song: ");
            console.log(JSON.stringify(data.tracks.items[0].name, null, 2));
            console.log("Link: ");
            console.log(JSON.stringify(data.tracks.items[0].external_urls.spotify, null, 2));
            console.log("Album: ");
            console.log(JSON.stringify(data.tracks.items[0].album.name, null, 2));

        });
    }
    // * If no song is provided then your program will default to "The Sign" by Ace of Base.
    else if (!target) {

        spotify.search({ type: 'track', query: "The Sign" }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            fs.appendFileSync("written.txt", (JSON.stringify(data, null, 2)));

            console.log("Artist or Band: ");
            console.log(JSON.stringify(data.tracks.items[8].album.artists[0].name, null, 2));
            console.log("Song: ");
            console.log(JSON.stringify(data.tracks.items[8].name, null, 2));
            console.log("Link: ");
            console.log(JSON.stringify(data.tracks.items[8].external_urls.spotify, null, 2));
            console.log("Album: ");
            console.log(JSON.stringify(data.tracks.items[8].album.name, null, 2));

        });


    } else {
        spotify.search({ type: 'track', query: target }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            fs.appendFileSync("written.txt", (JSON.stringify(data, null, 2)));

            console.log("Artist or Band: ");
            console.log(JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2));
            console.log("Song: ");
            console.log(JSON.stringify(data.tracks.items[0].name, null, 2));
            console.log("Link: ");
            console.log(JSON.stringify(data.tracks.items[0].external_urls.spotify, null, 2));
            console.log("Album: ");
            console.log(JSON.stringify(data.tracks.items[0].album.name, null, 2));

        });

    }
}

if (type == "movie-this") {
    if (target = "") {
        Console.log("Oh no! Looks like you forgot to type in a movie title!");
    }
    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + target + "&y=&plot=short&apikey=trilogy";

    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            fs.appendFileSync("written.txt", (response.data));

            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    );
}

// doesn't work
// if (type == "concert-this") {
    
//     var queryURL = "https://rest.bandsintown.com/artists/" + target + "/events?app_id=codingbootcamp";
//     console.log(queryURL);

//     axios.get(queryURL).then(
        
//         function (response) {
//             //console.log("written.txt", response);
//         }
//     )
    
//     bandsintown.getArtistEventList('Skrillex').then(function(events) {
//     // return array of events
//     //console.log(events.data)
//   });

// }


