//Parte 1: Invertir cadena

var cadena = prompt("Ingrese una cadena a invertir");
var cadenaInvertida = cadena[cadena.length - 1];
var i;

for (i = (cadena.length - 2); i >= 0; i--) {
	cadenaInvertida = cadenaInvertida + cadena[i]
}

console.log(cadenaInvertida);


//Parte 2: Invertir array

var arr = [];
var arrInvertido = [];
var posicion = arr.length - 1;
var elemArr = prompt("Ingresar elemento del array a invertir hasta decir 'basta'");

while (elemArr.toLowerCase() !== "basta") {
	arr.push(elemArr);
	elemArr = prompt("Ingresar nuevo elemento del array a invertir hasta decir 'basta'");
}

console.log(arr);

while (posicion >= 0) {
	arrInvertido.push(arr[posicion]);
	posicion--;
}

console.log(arrInvertido);