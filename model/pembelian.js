const mongoose = require("mongoose");
var SkemaBiaya = new mongoose.Schema({
  nomorbiaya: String,
  penerima : String,
  alamatpenagihan : String,
  tanggaltransaksi : Date,
  bayarnanti: Boolean,
  bayardari: String,
  metodepembayaran: String,
  subtotal: Number,
  total : Number,
  pemotongan: Number,
  sisatagihan: Number,
  catatan: String
});

mongoose.model("Biaya", SkemaBiaya);
module.exports = mongoose.model("Biaya");
