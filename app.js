var express = require("express");
var app = express();
var db = require('./db');

var UserController = require("./controller/PelangganController");
var RingkasanController = require("./controller/RingkasanController");
var JenisTransaksi = require("./controller/JenisTransaksiController");
var AktivitasTransaksi = require("./controller/AktivitasTransController");

app.use("/api", UserController);
app.use("/api", RingkasanController);
app.use("/api", JenisTransaksi);
app.use("/api", AktivitasTransaksi);
module.exports = app;
