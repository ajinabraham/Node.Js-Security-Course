
var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');


var express = require('express');
var app = express();
app.get('/', function(req, res) {
   var filePath = path.join(__dirname, '/' + req.query.load);
   var readStream = fileSystem.createReadStream(filePath);
   readStream.pipe(res);
});
app.listen(8888);
