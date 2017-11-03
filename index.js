var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var compression = require('compression');

// Initializing ExpressJS
var app = express();

// Central router
var controller_index = require('./controllers/index.js');

// Configuring CORS and central router
app.use(cors());
app.use(bodyParser.json());
app.use(compression());
app.use('/api', controller_index);

// Server Startup
app.listen(8081, function (error) {
    if (error) {
        console.log("error");
    }
    console.log("HondaBaas API Running !");
});