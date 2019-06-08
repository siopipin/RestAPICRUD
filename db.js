var mongoose = require("mongoose");

const uri = process.env.NODE_ENV === 'production' ?
  "mongodb+srv://dbSio:sio@dbcloud-rvfh0.mongodb.net/gps_mobile?retryWrites=true":
  "mongodb://db:27018/gps_mobile"

mongoose.connect(uri, { useNewUrlParser: true}, function(err){
  if(err){
    throw err
  }else{
    console.log('connected')
  }
});