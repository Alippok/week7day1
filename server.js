var express = require('express');//express is JS's version of Sinatra
var app = express();
var path = require('path');//helps node find things in directories

app.get('/', function (req, res) {//what to do when a request is made. Here it is the homepage
  res.sendFile(path.join(__dirname + '/index.html'));//sends the html file to the browser
});

app.use(express.static('public'));//tells express to use files in the public directory

var server = app.listen(3000, function(){//go and listen on the 3000 port for any requests
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});