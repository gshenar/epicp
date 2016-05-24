var express = require('express');
var request = require('request');
var firebase = require('firebase');
var _ = require('underscore');
require("babel-polyfill");

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/bower_components'));//allow bower to be used

app.get('/', function(request, response) {

});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

//Firebase
/*
var rootReference = new Firebase('https://luminous-inferno-1505.firebaseio.com/');
var populateSurfData = function() {
	_.each(surfSpots, function(surfSpot) {
		promise = getDataPromise(surfSpot.id);
		console.log("got promise");
		promise.then(function(data) {
			var dataObj = {};
			dataObj[surfSpot.name] = data;
			console.log(dataObj);
			rootReference.update(dataObj);
		});
	})
}
populateSurfData();*/