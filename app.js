var express = require("express");
var app = express();
var db = require("./db");

var UserController = require("./controller/PelangganController");
var RingkasanController = require("./controller/RingkasanController");
var JenisTransaksi = require("./controller/JenisTransaksiController");
var AktivitasTransaksi = require("./controller/AktivitasTransController");
var RingkasBeli = require("./controller/RingkasPembelianController");

app.use("/api", UserController);
app.use("/api", RingkasanController);
app.use("/api", JenisTransaksi);
app.use("/api", AktivitasTransaksi);
app.use("/api", RingkasBeli);
module.exports = app;
