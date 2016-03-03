'use strict';

// LIBRARIES
var Hapi = require('Hapi');

// ROUTES
var V1AppAPI = require('./src/routes/app');

// CONFIGURATION
var ip = "127.0.0.1";
var port = 8000;
var options = {};

// Create the server object
var server = new Hapi.Server(ip, port, {});

// Add our routes to the server
V1AppAPI.routes(server);

// Start the server
server.start(function() {
    console.log('server started');
});
