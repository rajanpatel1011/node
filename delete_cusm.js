var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err){
  if(err) throw err;
  con.query("DELETE FROM customers WHERE address = 'Mountain 21'",function(err,result){
    if(err) throw err;
    console.log("affected rows"+result.affectedRows);
  });
});
