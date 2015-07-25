// Array - Ejercicio 1: Concatenar array de strings en un string

var arrayInicial = [];
var stringResultado;

function crearArray() {
	var array = [];
	var elementoArray = prompt("Ingresar string del array hasta decir 'basta'"); // Los prompt aseguran que los datos ingresados son de tipo string
	while (elementoArray.toLowerCase() !== "basta") { // Mientras no escriba 'basta' sige solicitando strings al usuario. Se compara con el string ingresado en minúsculas para parar sin importar cómo escribe 'basta'
		array.push(elementoArray);
		elementoArray = prompt("Ingresar nuevo string del array hasta decir 'basta'");
	}
	return array;
}

function concatenar(array) {
	var resultado = ""; // Al inicializar la variable como string cualquier tipo de dato a concatenar con string da como resultado un string
	array.forEach(function(curEl) { // Recorrer el array de strings
		resultado += curEl; // Va concatenando cada elemento del array
	});
	if (resultado === "") { // Si no se inngresó ningun string, su concatenación da un string vacío
		throw new Error ("No se ingresó ningún string");
	} else {
		return resultado;
	}
}

try {
	arrayInicial = crearArray();
	console.log(arrayInicial);

	stringResultado = concatenar(arrayInicial);
	console.log(stringResultado);
} catch (e) {
	console.log(e.message);
}