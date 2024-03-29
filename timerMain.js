var timer = require("timer.js");

// express js
var express = require("express");
// create an express app
var port = 8081;
var app = express();
app.listen(port);

// pizzatime example
var Timer = new timer();
var countdownTime = 50 * 60; // define time as seconds eg: for five minutes 5*60

// timer starts as a global variable
Timer.start(countdownTime);
console.log("Timer starts on port: " + port);
// The usual way to call this api is to make a
// http GET request //TODO: not all method will
// be GET request. It should be converted into
// POST request ASAP.
// Configure root url
app.get("/", (req, res) => {
	res.send("Timer is working properly.");
});

app.get("/currentTime", (req, res) => {
  res.send(`${Timer.getDuration()}`);
});

// start will triggered the timer.
app.get("/start", (req, res) => {
  Timer.start(countdownTime);
  res.send("Timer starts")
});

// pause will pause the timer and send the
// currentTime.
app.get("/pause", (req, res) => {
  Timer.pause();
  res.send("Timer paused");
});

// stop will terminate the process. It needs to
// start again.
app.get("/stop", (req, res) => {
  Timer.stop();
  res.send("Timer stoped");
});
