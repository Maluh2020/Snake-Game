var canvas = document.getElementById("snake");
var context = canvas.getContext("2d");
var box = 32;
var snake = []
snake[0] = {
	x: 8*box,
	y: 8*box
}

function criarBG(){
	context.fillStyle = "lightgray";
	context.fillRect(0,0,16*box, 16*box);

}

function criarCobrinha(){
	for (var i = 0; i < snake.length; i++){
		context.fillStyle = "brown";
		context.fillRect(snake[i].x, snake[i].y, box, box);
	}
}

criarBG();
criarCobrinha();