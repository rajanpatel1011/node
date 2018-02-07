var mysql = require('mysql');

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"password",
  database:"mydb"
});

con.connect(function(err){
  if(err) throw err;
  var ecape = 'Mountain 21';

  con.query("SELECT * FROM customers where address ="+mysql.escape(ecape),function(err,result){
    if(err) throw err;
    console.log(result);
  });

});
