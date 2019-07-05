const mongoose = require("mongoose");
var SkemaUnit = new mongoose.Schema({
  unit: String,
});

mongoose.model("Unit", SkemaUnit);
module.exports = mongoose.model("Unit");
