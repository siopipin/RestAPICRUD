var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  nama: String,
  email: String,
  mobile: String,
  nomor_telepon: String,
  akun_hutang: String,
  akun_piutang: String,
  syarat_pembayaran_utama: String,
  alamat_penagihan: String,
  alamat_pengiriman: String,
});
mongoose.model('Pelanggan', UserSchema);

module.exports = mongoose.model('Pelanggan');