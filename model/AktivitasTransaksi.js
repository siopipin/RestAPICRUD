const mongoose = require("mongoose");
var SkemaAktivitasTransaksi = new mongoose.Schema({
  nama_aktivitas: String,
  kode: String,
  asal: String,
  tujuan: String,
  nominal: Number,
  tanggal_transaksi: Date
});

mongoose.model("AktivitasTransaksi", SkemaAktivitasTransaksi);
module.exports = mongoose.model("AktivitasTransaksi");
