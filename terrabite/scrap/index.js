var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    delete gameState.players[socket.id]
    console.log('user disconnected');
  });
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
socket.on('newPlayer', () => {
	gameState.players[socket.id] = {
		x: 250,
		y: 250,
		width: 25,
		height: 25
	}
})

socket.on('state', (gameState) => {
	for (let player in gameState.players) {
		rawPlayer(gameState.players[player])
}
})
});


setInterval(() => {
	io.sockets.emit('state', gameState);
	socket.emit('playerMovement', playerMovement);
}, 1000 / 60);

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

const gameState = {
	players: {}
};


