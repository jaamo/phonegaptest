var React = require('react');
var Render = require('react-dom').render;
var TerminusData = require('./TerminusData');
var TerminusAPI = require('./utils/TerminusAPI');
var PhonegapAPI = require('./utils/PhonegapAPI');
var TerminusApp = require('./components/TerminusApp.react.js');

// Load Mock data.
TerminusData.init();

// Load Mock API Call
setTimeout(function() {
  TerminusAPI.getData();
}, 1000);

// Init phonegap.
PhonegapAPI.init();

// Render Controller View
Render(
  <TerminusApp />,
  document.getElementById('flux-app')
);

