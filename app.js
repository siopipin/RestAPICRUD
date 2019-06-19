var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./controller/PelangganController');
var RingkasanController = require('./controller/PelangganController');

app.use('/api', UserController);
app.use('/api', RingkasanController);
module.exports = app;