'use strict'
//Bonus: take in state and city as arguments instead of hardcoding
var state = "CO";
var city = "Denver";

//Require apiKey
const apiKey = require('./env');

//Require the request library

const request = require('request');
//What is the `request` library you ask?
//Google `npm request` and you can find out!
const test = request("http://api.wunderground.com/api/" + apiKey.key + "/conditions/q/CO/Denver.json", function(err, response, body) {
	const weather = JSON.parse(body);
	console.log("The weather in " + weather.current_observation.display_location.city + " is " + weather.current_observation.weather);
});
	

// Set the API URL we are hitting, with our API Key, state, and city


//Send the request

  //Inside the callback

  //Print out the weather result
