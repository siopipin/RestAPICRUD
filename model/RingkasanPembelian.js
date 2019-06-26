const mongoose = require("mongoose");
var SkemaRingkasanPembelian = new mongoose.Schema({
  nama_ringkasan: String,
  saldo: String,
});

mongoose.model("RingkasanPembelian", SkemaRingkasanPembelian);
module.exports = mongoose.model("RingkasanPembelian");
