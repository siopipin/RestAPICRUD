var mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/dbmobile"
mongoose.connect(uri, { useNewUrlParser: true}, function(err){
  if(err){
    throw err
  }else{
    console.log('connected')
  }
});