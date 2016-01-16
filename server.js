var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.listen(4000, '0.0.0.0');
console.log('Listening on: http://localhost:4000');