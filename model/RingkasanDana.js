var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  namadana: String,
  nilai: String
});
mongoose.model('RingkasanDana', UserSchema);

module.exports = mongoose.model('RingkasanDana');