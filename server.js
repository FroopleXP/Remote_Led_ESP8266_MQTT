// Requiring dependencies
var config = require('./config/settings.js'),
    express = require('express'),
    mqtt = require('mqtt'),
    app = express(),
    client = mqtt.connect(config.app.mqtt_addr);

// Configuring the App
app.set('view engine', 'ejs');

// Connecting to MQTT
client.on('connect', function() {
    console.log("Connected to MQTT...");
});

// Routes
app.get('/', function(req, res) {
    res.render('index');
});

app.post('/switch', function(req, res) {
    res.sendStatus(200);
});

// Starting the App
app.listen(config.app.port, function() {
    console.log(config.app.name + " has started on port: " + config.app.port);
});
