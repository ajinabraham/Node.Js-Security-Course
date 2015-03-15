var http = require("http");
var url = require("url");
var exe = require('child_process');
http.createServer(function(request, response) 
{
  var parsedUrl = url.parse(request.url, true);
  response.writeHead(200, {"Content-Type": "text/html"});
  exe.exec('ping -c 2 ' + parsedUrl.query.ping, function (err, data) 
  { 
  response.write("Hello "+ data);
  response.end();
  });
  
}).listen(8888);
