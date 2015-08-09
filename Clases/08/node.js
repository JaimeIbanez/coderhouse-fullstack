// Sumar números que se pasan como parámetros en node

var parametros = process.argv;
var resultadoSuma = 0;

// function sumarNode (array) {
// 	var resultado = 0;
// 	for (var i = 2; i < array.length; i++) {
// 		var numero = Number(array[i]);
// 		if (isNaN(numero)) {
// 			throw new Error ("Error: Todos los parametros deben ser numeros");
// 		}
// 		resultado += numero;
// 	}
// 	return resultado;
// }

// resultadoSuma = sumarNode(parametros);
// console.log(resultadoSuma);


// Otra forma: usando map() y reduce()

parametros = parametros.slice(2);

var parametrosNum = parametros.map(function(num) {
	return Number(num);
});

console.log(parametrosNum);

resultadoSuma = parametrosNum.reduce(function(valorPrevio, valorActual, indice, array){
	return valorPrevio + valorActual;
});

console.log(resultadoSuma);
