var http = require('http');
var fs = require('fs');

var filename = process.argv[2];

server = http.createServer(function(request,response){
  fs.createReadStream(filename).pipe(response);
})