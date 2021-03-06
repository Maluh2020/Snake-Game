var canvas = document.getElementById("snake");
var context = canvas.getContext("2d");
var box = 32;

function criarBG(){
	context.fillStyle = "lightgray";
	context.fillRect(0,0,16*box, 16*box);

}

criarBG();