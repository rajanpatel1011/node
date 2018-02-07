var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://98.109.150.177/32:27017/mydb";
MongoClient.connect(url,function(err,db){
  if(err)throw err;
  console.log("database Created !!");
  db.close();
});
