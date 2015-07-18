function crearArrayDeDosNumeros () {
	return [1,2];
}

function agregarLength(arr) {
	if (!Array.isArray(arr)) {
		throw new Error(
			"Expected arr to be an array, " + 
			"but instead got: " + typeof arr
		);
	}
	arr.push(arr.length);
}

function devolverLength(arr) {
	try {
		agregarLength(arr);
	}
	catch(e) {
		arr = [];
		agregarLength(arr);
	}
	// devuelve el último valor
	return arr[arr.length - 1];
}

function main() {
	console.log(devolverLength(crearArrayDeDosNumeros()));
}

main();
console.log("termine");


//Suma infinita:

function sumar() {
	var res = 0;
	for (var i = 0; i < arguments.length; i++) {
		res += arguments[i];
	}
	return res;
}

console.log(sumar(1,3,4,10));

var sumandos = [1, 3, 4, 10];
console.log(sumar.apply(null, sumandos));