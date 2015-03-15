var http = require("http");
var url = require("url");
http.createServer(function(request, response) 
{
  var parsedUrl = url.parse(request.url, true);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello "+ parsedUrl.query.name);
  response.end();
}).listen(8888);
