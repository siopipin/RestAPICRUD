const mongoose = require("mongoose");
var SkemaProduk = new mongoose.Schema({
  namaproduk: String,
  kodeproduk : String,
  unit : String,
  satuan: String,
  deskripsi : String,
  beliproduk: Boolean,
  jualproduk: Boolean,
  hargabelisatuan: Number,
  akunpembelian: String,
  pajakbeli: Number
});

mongoose.model("Produk", SkemaProduk);
module.exports = mongoose.model("Produk");
