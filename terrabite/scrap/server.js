socket.emit('newPlayer');

const drawPlayer = (player) => {
	ctx.beginPath();
	ctx.rect(player.x, player.y, player.width, player.height);
	ctx.fillStyle = '#0095DD';
	ctx.fill();
	ctx.closePath();
};

const playerMovement = {
	up: false,
	down: false,
	left, false,
	right: false
};

const keyDownHandler = (e) => {
	if (e.keyCode == 39) {
		playerMovement.right = true;
	} else if (e.keyCode == 37) {
		playerMovement.left = true;
	} else if (e.keyCode == 38) {
		playerMovement.up = true;
	} else if (e.keyCode == 40) {
		playerMovement.down = true;

	}
};

const keyUpHandler = (e) => {
	if (e.keyCode == 39) {
		playerMovement.right = false;
	} else if (e.keyCode == 37) {
		playerMovement.left = false;
	} else if (e.keyCode == 38) {
		playerMovement.up = false;
	} else if (e.keyCode == 40) {
		playerMovement.down = false;

	}
};

socket.on('playerMovement', (playerMovement) => {
  const player = gameState.players[socket.id]
  const canvasWidth = 480
  const canvasHeight = 320
  
  if (playerMovement.left && player.x > 0) {
    player.x -= 4
  }
  if (playerMovement.right && player.x < canvasWidth - player.width) {
  player.x += 4
}
  
  if (playerMovement.up && player.y > 0) {
    player.y -= 4
  }
  if (playerMovement.down && player.y < canvasHeight - player.height) {
    player.y += 4
  }
})

