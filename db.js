var mongoose = require("mongoose");

const uri = "mongodb+srv://dbSio:sio@dbcloud-rvfh0.mongodb.net/gps_mobile?retryWrites=true"
mongoose.connect(uri, { useNewUrlParser: true}, function(err){
  if(err){
    throw err
  }else{
    console.log('connected')
  }
});