var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./controller/PelangganController');
app.use('/api', UserController);

module.exports = app;