const mongoose = require("mongoose");
var SkemaTransaksi = new mongoose.Schema({
  nama_transaksi: String,
  kode: String,
  saldo: Number
});

mongoose.model("JenisTransaksi", SkemaTransaksi);
module.exports = mongoose.model("JenisTransaksi");
