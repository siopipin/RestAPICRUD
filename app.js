var express = require("express");
var app = express();
var db = require("./db");

var UserController = require("./controller/PelangganController");
var RingkasanController = require("./controller/RingkasanController");
var JenisTransaksi = require("./controller/JenisTransaksiController");

app.use("/api", UserController);
app.use("/api", RingkasanController);
app.use("/api", JenisTransaksi);
module.exports = app;
