const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = (q.pathname !== "/") ? "." + q.pathname + ".html" : "./index.html";
  fs.readFile(filename, function(err, data) {
    if (err) {
      var errorFile = "./404.html";
      fs.readFile(errorFile, function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    }
  })
}).listen(8080)


  // var filename = (q.pathname !== '/' ? `.${q.pathname}.html` : './index.html');
  // let errorFile = './404.html';

