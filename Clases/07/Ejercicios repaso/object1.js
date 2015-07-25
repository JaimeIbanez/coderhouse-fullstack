// Object - Ejercicio 1: Transformar objeto en array con valores de sus propiedades como elementos

var objetoEntrada = { a: 1, b: "z", c: 3, d: true, e: null, f: undefined, g: NaN}; // Ingresar dentro de llaves las propiedades del objeto
var arrayResultado = [];

function aArrayDeValores(objeto) {
	var listadoKeys = Object.keys(objeto); // Listado de las keys del objeto
	var resultado = [];
	listadoKeys.forEach(function(curEl, curIndex, arr) { // Recorrer el listado de keys
		resultado.push(objeto[curEl]); // Añadir al array los valores de cada key del objeto en cada iteración del forEach
    });
	return resultado;
}

arrayResultado = aArrayDeValores(objetoEntrada);
console.log(arrayResultado);
