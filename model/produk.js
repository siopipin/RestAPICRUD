const mongoose = require("mongoose");
var SkemaProduk = new mongoose.Schema({
  namaproduk: String,
  kodeproduk : String,
  unit : String,
  satuan: Number,
  deskripsi : String,
  beliproduk: Boolean,
  jualproduk: Boolean,
  hargabelisatuan: Number,
  akunpembelian: String,
  pajakbeli: Number,
  hargajualsatuan: Number,
  akunpenjualan: String,
  pajakjual: Number
});

mongoose.model("Produk", SkemaProduk);
module.exports = mongoose.model("Produk");
