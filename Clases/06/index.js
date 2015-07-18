//Ejercicio 1: Buscar pares en un array (con controles)

function buscarPares(arr) {
	if (!Array.isArray(arr)) {
		throw new Error(
			"Expected arr to be an array, " + 
			"but instead got: " + typeof arr
		);
	}
	var pares = [];
	var i;
	for (i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			pares.push(arr[i]);
		}
	}
	return pares;
}

var miArr = [1,2,3,4,5,6];

try {
	console.log(buscarPares(miArr));
}
catch (e) {
	console.log(e.message);
}
