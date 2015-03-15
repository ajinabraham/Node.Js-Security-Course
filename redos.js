var http = require("http");
var url = require("url");
http.createServer(function(request, response) 
{
  starttime = process.hrtime();
  var emailExpression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var parsedUrl = url.parse(request.url, true);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("User Input : "+ parsedUrl.query.email);
  response.write("Email Validation : "+ emailExpression.test( parsedUrl.query.email ));
  response.write("</br>Server Response Time: " + process.hrtime(starttime));
  response.end();
}).listen(8888);