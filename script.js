var canvas = document.getElementById("snake");
var context = canvas.getContext("2d");
var box = 32;
var snake = []
snake[0] = {
	x: 8*box,
	y: 8*box
}

var direction = "rigth";

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

function iniciarGame (){
	criarBG();
	criarCobrinha();

	var snakeX = snake[0].x;
	var snakeY = snake[0].y;

	if(direction == "rigth") snakeX += box;
	if(direction == "left") snakeX -= box;
	if(direction == "up") snakeY -= box;
	if(direction == "down") snakeY += box;

	snake.pop();

	var newHead = {
		x: snakeX,
		y: snakeY
	}

	snake.unshift(newHead);


}


var game = setInterval(iniciarGame, 100);



criarBG();
criarCobrinha();