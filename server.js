var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

var server  = app.listen(3000)

var socketio = require('socket.io');
io = socketio.listen(server);

io.on('connection', function(socket){
	socket.on('mensaje', function(mensaje){
		console.log(mensaje)
		io.emit('mensaje', mensaje);
	})
})