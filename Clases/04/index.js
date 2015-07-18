alert("ESTA ALERTA SE CORRE EN INDEX.JS!");
//prompt("ingresa un valor", "valor default");

//var numero;
//numero = prompt("Ingresa un número");
//numero = Number(numero);

var numero = Number(prompt("Ingresa un número"));

if ((numero % 2) === 0) {
	alert("El número " + numero + " es par");
} else {
	alert("El número " + numero + " es impar");
}

//Operador ternario (para simplificar un condicional if):
//var parImparMensaje = (numero % 2 === 0)? "Par" : "Impar";
//alert("El número " + numero + " es " + parImparMensaje);
