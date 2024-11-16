var http = require('http');

http.createServer(function (req, res) {
  res.write("Im alive");
  res.end();
}).listen(8080);
