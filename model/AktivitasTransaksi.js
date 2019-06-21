const mongoose = require("mongoose");
var SkemaAktivitasTransaksi = new mongoose.Schema({
  nama_aktivitas: String,
  kode: String,
  tujuan: String,
  nominal: Number,
  tanggal_transaksi: Date
});

mongoose.model("AktivitasTransaksi", SkemaTransaksi);
module.exports = mongoose.model("AktivitasTransaksi");
