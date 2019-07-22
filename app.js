var express = require("express");
var app = express();
var db = require("./db");
var bodyParser = require('body-parser');

var UserController = require("./controller/PelangganController");
var RingkasanController = require("./controller/RingkasanController");
var JenisTransaksi = require("./controller/JenisTransaksiController");
var AktivitasTransaksi = require("./controller/AktivitasTransController");
var RingkasBeli = require("./controller/RingkasPembelianController");
const FakturBeli = require("./controller/FakturPembelian");
const Biaya = require("./controller/BiayaController");
const Produk = require("./controller/ProdukController");
const Unit = require("./controller/UnitController");
const Akun = require("./controller/AkunController");
const OrderSimbio = require('./controller/SimbioOrderController');


var index = require('./routes/index');
var user = require('./routes/user');
var loginOnly = require('./routes/loginOnly');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", UserController);
app.use("/api", RingkasanController);
app.use("/api", JenisTransaksi);
app.use("/api", AktivitasTransaksi);
app.use("/api", RingkasBeli);
app.use("/api", FakturBeli);
app.use("/api", Biaya);
app.use("/api", Produk);
app.use("/api", Unit);
app.use("/api", Akun);
app.use("/mobile", OrderSimbio);
app.use('/api/home', index);
app.use('/api/user', user);
app.use('/api/loginOnly', loginOnly);
module.exports = app;
