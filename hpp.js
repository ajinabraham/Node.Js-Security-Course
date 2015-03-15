var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('id: ' + req.query.id);
  console.log("GET / id="+req.query.id);
});
app.listen(3000);
