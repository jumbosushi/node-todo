// Set up ====================
var express = require('express');
var app      = express();
var mongoose       = require('mongoose');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// Configuration =================

mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');

app.use(express.static(_dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoe({'extened': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());

// listen (start app with node server.js) ======
app.listen(8080);
console.log("App listening on port 8080");
