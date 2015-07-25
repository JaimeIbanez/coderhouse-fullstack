// Object - Ejercicio 2: Transformar objeto con propiedades con valores string en string que sea la concatenación dichos valores

var objetoEntrada = { a: "h", b: "o",c: "l", d: "a"}; // Ingresar dentro de llaves las propiedades del objeto
var stringResultado;

function concatenarObj(objeto) {
	var listadoKeys = Object.keys(objeto); // Listado de las keys del objeto
	var resultado = ""; // Al inicializar la variable como string cualquier tipo de dato a concatenar con string da como resultado un string
	listadoKeys.forEach(function(curEl, curIndex, arr) { // Recorrer el listado de keys
		if (typeof objeto[curEl] === "string") { // Validar que los valores de las propiedades del objeto sean strings
			resultado += objeto[curEl]; // Concatenar los valores de cada key del objeto en cada iteración del forEach
		} else {
			throw new Error("Todos los valores de las propiedades del objeto deben ser de tipo string")
		}
    });
	return resultado;
}

try {
	stringResultado = concatenarObj(objetoEntrada);
	console.log(stringResultado);
} catch (e) {
	console.log(e.message)
}
