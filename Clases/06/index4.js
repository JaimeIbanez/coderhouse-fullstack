//Realizar una función que reciba un array y una función
//de filtrado y que mediante el uso explícito de forEach
//contabilice los elementos del array pasado que al
//aplicarle la función recibida por parámetro al elemento
//actual del forEach esta devuelva true

function filtroPar (elemArray) {
	var esPar = false;
	if ((elemArray%2) === 0) {
		esPar = true;
	}
	return esPar;
}

//console.log(filtroPar(2));

function ejercicio (arr, filtroPar) {
	var contFiltro = 0;
	arr.forEach(function(curEl, curIndex, arr) { //los que no use son opcionales, lo que importa es que mantengan la misma posicion
		var elemPar = filtroPar(curEl);
		if (elemPar === true) {
			contFiltro++;
		}
    });
    return contFiltro;
}

var arr = [1,2,3,4,5,6,7,8,6];

console.log(ejercicio(arr, filtroPar));


// funcion de criterio de filtro = da true o false dependiendo de lo que sea
// funcion (array , filtro) - usa forEach
// recorre el array y cuenta los elementos que cumplen con el filtro (true)
