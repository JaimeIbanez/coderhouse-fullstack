// String - Ejercicio 1: Buscar cantidad de ocurrencias de un string dentro de otro

var stringInicial = prompt("Ingrese un string"); // Los prompt aseguran que los datos ingresados son de tipo string
var stringBuscar = prompt("Ingrese un string a buscar en el string anterior");
var cantOcurrencias = 0;

function contarOcurrencias(str1, str2) {
	if ((str1 !== "") && (str2 !== "")) { // Validación de no ingreso de strings vacíos
		var posicion = 0;
		var cantidad = 0;
		while (posicion >= 0) {
			posicion = str1.indexOf(str2, posicion); // Busca la primera ocurrencia desde la posición dada
			if (posicion === -1) { // No encontró
				return cantidad;
			} else { // Si encontró
				cantidad++; // Aumenta contador
				posicion++; // Incrementa para empezar a buscar desde la posición siguiente a la ocurrencia
			}
		}
		return cantidad;
	} else { // Mensajes de error por ingreso de strings vacíos
		if ((str1 === "") && (str2 === "")) {
			throw new Error("No se ingresó ningún string");
		}
		if (str1 === "") {
			throw new Error("No se ingresó string base");
		}
		if (str2 === "") {
			throw new Error("No se ingresó string a buscar");
		}
	}
}

try {
	cantOcurrencias = contarOcurrencias(stringInicial, stringBuscar);
	console.log(cantOcurrencias);
} catch (e) {
	console.log(e.message);
}


// Otro método (OJO: no incluye la validación de string vacío):

// Cuenta las separaciones que dejan las ocurrencias con split() en un array
function contarOcurrencias2(str1, str2) {
   var espacios = str1.split(str2); // Se convierte al string base en un array separado por el string a buscar
   return espacios.length - 1; // La cantidad de ocurrencias es igual a la cantidad de separaciones, que es igual a la cantidad de elementos del array - 1
}

cantOcurrencias = contarOcurrencias2(stringInicial, stringBuscar);
console.log(cantOcurrencias);