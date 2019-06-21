var express = require("express");
var app = express();

var UserController = require("./controller/PelangganController");
var RingkasanController = require("./controller/RingkasanController");

app.use("/api", UserController);
app.use("/api", RingkasanController);
module.exports = app;
