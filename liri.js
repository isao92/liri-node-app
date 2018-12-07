
//add code to read and set any environment variables with the dotenv package
require("dotenv").config();

//Add the code required to import the keys.js file and store it in a variable
var spotify = new spotify(keys.spotify);

//Make it so liri.js can tak in one of the following commands: concert-this, spotify-this-song, movie-this, do-what-it-says

//node liri.js concert-this <artist/band name here>
//This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

