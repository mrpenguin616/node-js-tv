var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(app);

app.get('/', function(req, res){
	res.sendfile('index.html');
}
server.listen(8080);

