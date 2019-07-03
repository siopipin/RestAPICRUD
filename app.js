var express = require("express");
var app = express();
var db = require("./db");

var UserController = require("./controller/PelangganController");
var RingkasanController = require("./controller/RingkasanController");
var JenisTransaksi = require("./controller/JenisTransaksiController");
var AktivitasTransaksi = require("./controller/AktivitasTransController");
var RingkasBeli = require("./controller/RingkasPembelianController");
const FakturBeli = require("./controller/FakturPembelian")
const Biaya = require('./controller/BiayaController')

app.use("/api", UserController);
app.use("/api", RingkasanController);
app.use("/api", JenisTransaksi);
app.use("/api", AktivitasTransaksi);
app.use("/api", RingkasBeli);
app.use("/api", FakturBeli);
app.use("/api", Biaya);
module.exports = app;
