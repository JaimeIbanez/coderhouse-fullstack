// Array - Ejercicio 2: Recibir un array y retornar otro array con los tipos de datos de cada elemento original

var arrayEntrada = [1, "string", true, {}, function(){}, NaN, null,, "", undefined]; // Ingresar dentro de corchetes los elementos del array
var arrayResultado = [];

function transformarATipos(array) {
	if (array.length === 0) { // Validar que no se ingrese un array vacío
		throw new Error ("No se ingresó ningún elemento al array");
	} else {
		var nuevoArray = [];
		var tipoDato;
		// Nota: se usa la función for ya que el método forEach no tienen en cuenta los "huecos" o posiciones vacías en el array. Posiciones vacías: tipo "undefined"
		for (var i = 0; i < array.length; i++) {
			tipoDato = Object.prototype.toString.call(array[i]); // Se usa el método call() ya que typeof toma el objeto null como object
			tipoDato = tipoDato.substring((tipoDato.indexOf(" ") + 1),(tipoDato.length - 1)); // Tomar la palabra del tipo de dato del string (desde después del espacio hasta el anteúltimo caracter) - Esquema: "[object Tipodato]"
			tipoDato = tipoDato.toLowerCase(); // Tipo de dato en minúscula para concordar con ejemplo de enunciado
			nuevoArray.push(tipoDato);
		}
		
		// Método alternativo: Usando forEach y typeof:
		// array.forEach(function(curEl, curIndex, arr) {
		// 	nuevoArray.push(typeof curEl);
		// });
		return nuevoArray;
	}
}

try {
	arrayResultado = transformarATipos(arrayEntrada);
	console.log(arrayEntrada);
	console.log(arrayResultado);
} catch (e) {
	console.log(e.message);
}