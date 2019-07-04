const mongoose = require("mongoose");
var SkemaProduk = new mongoose.Schema({
  namaproduk: String,
  kodeproduk : String,
  unit : String,
  deskripsi : String,
  beliproduk: Boolean,
  jualproduk: Boolean,
});

mongoose.model("Produk", SkemaProduk);
module.exports = mongoose.model("Produk");
