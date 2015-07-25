// String - Ejercicio 2: Transformar un string añadiendo después de cada caracter su posición

var stringEntrada = prompt("Ingrese un string"); // Los prompt aseguran que los datos ingresados son de tipo string
var stringIndice;

function agregarIndice(string) {
	if (string !== "") { // Si no es string vacío, ejecutar código
		var nuevoString = string[0] + 0; // Inicializar nuevo string con primer caracter y posición 0 (si no se inicializa empieza con undefined)
		for (var i = 1; i < string.length; i++) {
			nuevoString += string[i] + i; // Va concatenando cada caracter y su posición en cada iteración del for
		}
		return nuevoString;
	} else { // Si es string vacío, error
		throw new Error("No se ingresó ningún string");
	}
}

try {
	stringIndice = agregarIndice(stringEntrada);
	console.log(stringIndice);
} catch (e) {
	console.log(e.message);
}