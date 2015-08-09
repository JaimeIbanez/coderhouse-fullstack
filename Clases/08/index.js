for(var i = 0; i < 10; i++) {
	setTimeout(function test() {
		console.log(i);
	}, 0);
}
// 10, 10, 10, ...

var contador = 0;
for(var i = 0; i < 10; i++) {
	setTimeout(function test() {
		console.log(contador);
		contador++;
	}, 0);
}
// 0, 1, 2, 3, ...


// Función para generar números aleatorios entre un min y un max
var min = 3000;
var max = 5000;

function getRandomInt(min, max) {
	var random = Math.floor(Math.random() * (max - min)) + min;
	return random;
}
