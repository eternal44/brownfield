var express = require('express');
var middleware = require('./config/middleware.js');

var app = express();

middleware(app, express);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('listening on port ', port);
});
