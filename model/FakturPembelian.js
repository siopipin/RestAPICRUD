const mongoose = require("mongoose");
var SkemaFakturPembelian = new mongoose.Schema({
  nomor_transaksi: String,
  nama_supplier: String,
  email: String,
  alamat_penagihan: String,
  tanggal_transaksi: Date,
  tanggal_jatuh_tempo: Date,
  syaratpembayaran: String,
  subtotal: Number,
  diskonperbaris: Number,
  pajak: Number,
  sisatagih: Number,
  infotambahan: String
});

mongoose.model("FakturPembelian", SkemaFakturPembelian);
module.exports = mongoose.model("FakturPembelian");
