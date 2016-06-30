// Requiring dependencies
var express = require('express'),
    app = express();

// Requiring config files
var config = require('./config/settings.js');

// Routes
app.get('/', function(req, res) {
    res.sendStatus(200);
});

// Starting the App
app.listen(config.app.port, function() {
    console.log(config.app.name + " has started on port: " + config.app.port);
});
