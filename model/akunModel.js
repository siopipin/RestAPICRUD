const mongoose = require("mongoose");
var SkemaAkun = new mongoose.Schema({
  namaakun: String,
  kodeakun : String,
});

mongoose.model("Akun", SkemaAkun);
module.exports = mongoose.model("Akun");
