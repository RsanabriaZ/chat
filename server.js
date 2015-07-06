var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.sendfile('index.html')
})


var server  = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})


var socketio = require('socket.io');
io = socketio.listen(server);


io.on('connection', function(socket){
	console.log("alguien se ha conectado")
})