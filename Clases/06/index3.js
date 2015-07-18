var v1 = 2;

function cambiarVariable () {
	var v1 = 4;
	//v1 = 4;
	console.log("segunda impresión " + v1);
	var v2 = 6;
	console.log("segunda impresión2 " + v2);
}

console.log("primera impresión " + v1);
//console.log("segunda impresión2 " + v2);

cambiarVariable();

console.log("tercera impresión " + v1);

function sumar (a, b, c, d) {
	var suma = a + b + c + d;
	return suma;
}

console.log(sumar.length);

