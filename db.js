var mongoose = require("mongoose");

const uri = "mongodb://db:37017/dbbulking"
mongoose.connect(uri, { useNewUrlParser: true}, function(err){
  if(err){
    throw err
  }else{
    console.log('connected')
  }
});