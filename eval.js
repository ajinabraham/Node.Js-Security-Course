var express = require('express');
var app = express();
app.get('/', function(req, res) {
  var resp=eval("("+req.query.name+")");
  res.send('Response</br>'+resp);
});
app.listen(8000);
