//Ejercicio 1: Evaluar consonante

var str1 = prompt("Ingrese un string");
var vocalConsonante = (
	str1[0] === "a" || 
	str1[0] === "e" || 
	str1[0] === "i" || 
	str1[0] === "o" || 
	str1[0] === "u" );

if (vocalConsonante) {
	console.log("El string " + str1 + " empieza con una vocal");
} else {
	console.log("El string " + str1 + " empieza con la consonante " + str1[0]);
}


//Ejercicio 2: Recorrer un string

var i;
var str2 = prompt("Ingrese otro string");

for (i = 0; i < str2.length; i++) {
	console.log (str2[i]);
}


//Ejercicio 3: Buscar posición de la primera vocal

i = 0;
var str3 = prompt("Ingrese otro string más");
var primeraVocal;

do {
	primeraVocal = (
		str3[i] === "a" || 
		str3[i] === "e" || 
		str3[i] === "i" || 
		str3[i] === "o" || 
		str3[i] === "u"
	);
	if (primeraVocal) {
		console.log("La primera vocal del string " + str3 + " está en la posición " + i)
	}
	i++;
} while (primeraVocal === false && i < str3.length)

if (primeraVocal === false) {
	console.log("El string " + str3 + " no tiene vocales");
}

// Otra forma:

// var cadenaDeTexto = prompt("Ingrese la cadena de texto");
// var letra;
// var posLetra = 0;

// while (posLetra < cadenaDeTexto.length) {
// 	letra = cadenaDeTexto[posLetra];
// 	if (
// 		letra === "a"
// 		|| letra === "e"
// 		|| letra === "i"
// 		|| letra === "o"
// 		|| letra === "u"
// 	) {
// 		console.log("La cadena de texto " + cadenaDeTexto + "tiene su primera vocal en la posición " + posLetra);
// 		break;
// 	}
// 	posLetra++;
// }


//Ejercicio 4: Contar cantidad de vocales

i = 0;
var str4 = prompt("Ingrese otro string de nuevo");
var cantidadVocales = 0;

for (i = 0; i < str4.length; i++) {
	if (
		str4[i] === "a"
		|| str4[i] === "e"
		|| str4[i] === "i"
		|| str4[i] === "o"
		|| str4[i] === "u"
	) {
		cantidadVocales++;
	}
}

console.log ("El string " + str4 + " tiene " + cantidadVocales + " vocales");


//Ejercicio 5: Contar caracteres numéricos mayores a N

i = 0;
var str5 = prompt("Ingrese otro string (será el último, no lo sé)");
var numRef = prompt("Ingrese el número de referencia");
var cantNum = 0;
var cantNumMay = 0;

for (i = 0; i < str5.length; i++) {
	if (!isNaN(Number(str5[i]))) {
		cantNum++;
		if (Number(str5[i]) > numRef) {
			cantNumMay++;
		}
	}
}

console.log("El string " + str5 + " tiene " + cantNum + " números y de esos números " + cantNumMay + " son mayores a " + numRef);


//Ejercicio 6: Buscar un string dentro de otro

var strInicial = prompt("Ingrese un string");
var strBuscar = prompt("Ingrese un string a buscar en el string anterior");
var orientacion = prompt("Ingrese orientación de búsqueda: primera o ultima?")
var banderaOrientacion = false;
var posicion;

do {
	if (orientacion === "primera") {
		posicion = strInicial.indexOf(strBuscar);
		banderaOrientacion = true;
	} else if (orientacion === "ultima") {
		posicion = strInicial.lastIndexOf(strBuscar);
		banderaOrientacion = true;
	} else {
		orientacion = prompt("Orientación no válida. Ingrese orientación de búsqueda: primera o ultima?")
	}
} while (banderaOrientacion === false)

if (posicion ===  -1) {
	console.log("No se encontró ocurrencia");
} else {
	console.log("El string " + strBuscar + " se encontró en la posición " + posicion);
}


//Ejercicio 7: Crear un array hasta decir "basta"

var array = [];
var elementoArray = prompt("Ingresar elemento del array hasta decir 'basta'");

while (elementoArray !== "basta") {
	array.push(elementoArray);
	elementoArray = prompt("Ingresar nuevo elemento del array hasta decir 'basta'");
}

console.log(array);
//console.log(array.join(","));