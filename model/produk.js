const mongoose = require("mongoose");
var SkemaProduk = new mongoose.Schema({
  namaproduk: String,
  kodeproduk : String,
  unit : String,
  deskripsi : Date,
  beliproduk: Boolean,
  jualproduk: Boolean,
});

mongoose.model("Produk", SkemaProduk);
module.exports = mongoose.model("Produk");
