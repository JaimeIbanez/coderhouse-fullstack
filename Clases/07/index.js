// Ejercicio 1: Crear una función que reciba un objeto y devuelva la suma de todos los valores de sus keys

function obtenerSuma(objeto) {
	var myKeys = Object.keys(objeto);
	var resultadoSuma = 0;
	
	// Alternativa: Suma usando for
	// for (var i = 0; i < myKeys.length; i++) {
	// 	resultadoSuma += objeto[myKeys[i]];
	// }
	
	// Suma usando forEach
	myKeys.forEach(function(curEl, curIndex, arr) {
		resultadoSuma += objeto[curEl];
    });

	return resultadoSuma;
}

var miObjeto = {a: 1, b: 2, c: 3, d: 4};

console.log(obtenerSuma(miObjeto));


// Ejercicio 1 con validación de tipo de datos numéricos

function obtenerSuma2(objeto) {
	var myKeys = Object.keys(objeto);
	var resultadoSuma = 0;
	
	var corto = myKeys.some(function(curEl) {
		if (typeof objeto[curEl] === "number") {
			resultadoSuma += objeto[curEl];
			return false;
		} else {
			// si quiero cortar y devolver error
			return true;
		}
    });

	if(corto) {
		throw new Error("Se ingresó un dato que no es un número")
	}

	return resultadoSuma;
}

var miObjeto = {a: 1, b: 2, c: 3, d: 4};

try {
	console.log(obtenerSuma2(miObjeto));
} catch (e) {
	console.log(e.message);
}