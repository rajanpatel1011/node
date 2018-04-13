var path = require('path');
var exoress = require('express');
var app = exoress();

app.use(exoress.static(process.argv[3]||path.join(__dirname,'public')))

app.listen(process.argv[2]);
