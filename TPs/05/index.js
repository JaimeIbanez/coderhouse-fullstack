// Solicitar al usuario un listado de números

function crearArray() {
	var arrayCreado = [];
	var elemArr = prompt("Ingresar números a operar hasta decir 'basta'");
	var elemArrEsNumber;
	while (elemArr.toLowerCase() !== "basta") {
		elemArrEsNumber = Number(elemArr);
		if (isNaN(elemArrEsNumber)) {
			throw new Error(
				"Se esperaba que el elemento " + elemArr + " sea un number, " + 
				"pero en su lugar se obtuvo un: " + typeof elemArr
			);
		} else {
		arrayCreado.push(elemArrEsNumber);
		elemArr = prompt("Ingresar números a operar hasta decir 'basta'");
		}
	}
	return arrayCreado;
}

// Multiplicar dos números

function multiplicar(elem1, elem2) {
	var resultado;
	resultado = elem1 * elem2;
	return resultado;
}

// Operar pares de elementos del array

function obtenerResultados(funcion, arr) {
	if (arr.length === 0) {
		throw new Error(
			"No se ingresaron números a operar"
		);
	} else if ((arr.length % 2) !== 0) {
		throw new Error(
			"Se esperaba un número par de elementos para operar, " + 
			"pero se ingresaron: " + arr.length
		);
	} else {
		var arrayOper = [];
		arr.reduce(function(valorPrevio, valorActual, indice, array) {
			//console.log(valorPrevio, valorActual) // Validación del funcionamiento del reduce()
			arrayOper.push(funcion(valorPrevio, valorActual));
			return valorActual;
		});
		var arrayResultado = [];
		for (var i = 0; i < arrayOper.length; i += 2) {
			arrayResultado.push(arrayOper[i]);
		}
		return arrayResultado;
		//return arrayOper; // Retorno si se multiplican todos los pares de elementos del array
	}
}

try {
	var arrayInput = crearArray();
	
	console.log(arrayInput); // Imprimir listado de números ingresados
	console.log(arrayInput.length); // Validación de la cantidad de números ingresados
	
	console.log(obtenerResultados(multiplicar, arrayInput));
} catch (e) {
	console.log(e.message);
}
