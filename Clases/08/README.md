# Node.js #

## Introducción ##

Node.js es un servidor basado en eventos de entrada y salida (Input/Output) en un ambiente JavaScript basado en **V8** (motor de JS de código abierto para Google Chrome que compila el código de JS en lenguaje nativo de la máquina antes de ejecutarlo).

Node.js lo que hace es tener una lista de tareas o cola (**event queue**) y constantemente pregunta si tiene algo para hacer (**event loop**).

## Paquetes ##

Con Node.js se pueden usar ciertos módulos que se instalan con el mismo Node.js.

**npm** es un gestor de paquetes (**package manager**) de JavaScript para Node.js, donde publico mis propios módulos/proyectos. Un gestor de paquetes es una colección de herramientas que sirven para automatizar el proceso de instalación, actualización, configuración y eliminación de paquetes de software.

### Instalar un paquete ###

Con `npm install` se puede hacer una instalación **local** de un paquete en el directorio donde estoy parado.

	npm instal nombre_paquete

Para hacer una instalación **global** de un paquete, se añade al final `-g`.

	npm instal nombre_paquete -g

La instalación sólo sirve para paquetes pensados como comandos (herramientas de la consola).

## Sobre sistemas operativos

Un sistema operativo está compuesto por:

- **File System:** Lo que da la capacidad de guardar archivos, tener estructura de archivos/carpetas, extensiones, etc.
- **Procesos:** Programa ejecutado en la memoria. Los procesos tienen un número identificador(PID, Process ID), % de memoria que usa, entre otros atributos.

## Métodos ##

### Require ###

Es un método para utilizar módulos de Node.js. Si el módulo no viene con la instalación de Node.js, entonces primero hay que instalar dicho módulo.

	require('nombre_modulo')

### Node ###

Es un comando que permite abrir la consola de Node.js y abrir archivos de JS en la terminal.

**Abrir archivo de JavaScript:**

	cd ruta/directorio // Llegar al directorio/carpeta donder está el archivo JS
	node archivoNode.js // Abrir archivo JS en la terminal de Node

### Process Arguments ###

El objeto `process` es un objeto global al cual se puede acceder desde cualquier lado.

El método `process.argv` devuelve un array que contiene los argumentos de una línea de comando, llamado **argument vector**. El primer elemento del array será 'node', el segundo elemento será el nombre del archivo JavaScript. Los siguientes elementos serán los argumentos adicionales de la línea de comando, o **parámetros** (separados por espacios).

	node archivoNode.js param1 param2 param3
	
	var argVector = process.argv; // ['node', 'archivoNode.js', 'param1', 'param2', 'param3']

Nota: Los elementos del **argument vector** son de tipo *string*. 

### Read File ###

Es un método que permite leer el contenido de un archivo de texto simple. Ejecuta una función que emite un error o retorna como resultado el contenido del texto.

    var fs = require('fs'); //filesystem
    fs.readFile('textFile.txt', function(error, resultado) {
    	if (error) {
			console.log('error:', error);
			return;
		}
    	console.log('resultado:', resultado);
    });

El método `readFile` por naturaleza no es bloqueante. El sistema operativo elige cual terminar de ejecutar primero (usualmente es el más pequeño). Para ejecutar varios `readFile` de forma secuencial, hay que meter uno dentro de otro.

**Nota:** Cuando se ejecuta un proceso asincrónico, es recomendable que el programa haga algo para avisar que se terminó de ejecutar.

Si no hay ningún error, el parámetro 'error' es ***null*** (no *undefined*).

Al método `readFile` se le puede especificar el **encoding** (manera de representar caracteres) para que muestre los caracteres como texto. Si no se especifica el encoding, entonces el resultado (contenido del texto) se muestra como un raw buffer. 

	fs.readFile('textFile.txt', 'utf8', function(error, resultado) {...}); // encoding: 'utf8'

Otra forma para tener el contenido del archivo en formato texto es convertir el resultado en un string usando el método `toString()`.

	console.log('resultado:', resultado.toString());

### Read File Sync ###

Es un método que retorna el contenido de un archivo de texto. Es una versión sincrónica (bloqueante) del método `readFile`. Tal como en el caso anterior, si se especifica una opción de encoding la función devuelve un string, sino devuelve un buffer.

	var fs = require('fs');
    var sync = fs.readFileSync('textFile.txt', 'utf8');
	console.log(sync);

### Set Timeout ###

Es un método que ejecuta una función después de un tiempo dado (ejecución programada).

	setTimeout(function(){código;}, tiempoEnMilisegundos);

Con el método `clearTimeout` y el id del timeout se puede cancelar la ejecución de un `setTimeout`.

	clearTimeout(idTimeout);

**For y Set Timeout:**

Si hay un `setTimeout` dentro de un loop `for`, primero se ejecutan todos los ciclos del `for` (sincrónicos), y luego se ejecuta el `setTimeout` (asincrónico) tantas veces como ciclos corrió el `for` con los valores finales de la ejecución del `for`. 

	for (var i = 0; i < n; i++) {
		setTimeout(function() {
			console.log(i);
		}, 0);
	}

**Nota:** Si al `setTimeout` se le da un tiempo de ejecución igual a **0**, se ejecutará inmediátamente después de un proceso sincrónico.

### Read Dir ###

Es un método asincrónico que lee el contenido de un directorio. Da como resultado un array con los nombres de los archivos del directorio excluyendo '.' y '..'.

	var fs = require('fs');
    fs.readdir('path', function(error, files) {
    	if (error) {
			console.log(error);
			return;
		}
    	console.log(files);
    });

### Stat ###

Es un método asincrónico que devuelve como resultado en el argumento `stats` un objeto `fs.Stats`.

	var fs = require('fs');
    fs.stats('path', function(error, stats) {
    	if (error) {
			console.log(error);
			return;
		}
    	console.log(stats);
    });

El objeto `fs.Stats` puede ser validado con algunos métodos para determinar qué tipo de objeto es:

- stats.isFile() - Devuelve `true` si *stats* es un archivo
- stats.isDirectory() - Devuelve `true` si *stats* es un directorio.

## Closure ##

Es una función que guarda los parámetros que tenía cuando fue creada, no ejecutada.

Una **closure** es una función interna que tiene acceso a las variables del *scope* de una función externa o contenedora. La **closure** tiene acceso a 3 niveles de *scope*:

- Tiene acceso a su propio scope (variables definidas dentro de sus `{}`).
- Tiene acceso a las variables de la función externa.
- Tiene acceso a las variables globales.

La función interna no sólo tiene acceso a las variables de la función externa, sino tambien a los **parámetros** de la función externa. Cabe aclarar que la función interna no puede llamar al objeto *arguments* de la función externa; sin embargo, si puede llamar directamente a los parámetros de la función externa.

Para crear una **closure** se define una función dentro de otra función.

	function funcionExterna(parametro1, parametro2) {
		var variableExterna = parametro1 + parametro2;
		function funcionClosure() {
			var variableInterna = variableExterna;
			return variableInterna;
		}
		return funcionClosure();
	}

Las **closures** son usadas mucho en Node.js en modelos asincrónicos y arquitecturas no bloqueantes. También se usan frecuentemente en jQuery.

### Reglas y Efectos secundarios ###

1. **Los closures tienen acceso a las variables de la función externa incluso después de que la función externa retorne su resultado:** Cuando las funciones en JS se ejecutan, usan el mismo scope que estaba activo cuando fueron creadas. Esto significa que incluso después de que la función externa haya hecho `return`, la función interna todavía puede acceder a las variables de la función externa. Por ende, se puede llamar a la función interna más adelante en el programa.

2. **Los closures guardan las referencias a las variables de las funciones externas, no guardan sus valores en sí mismos:** Esta propiedad puede ser aprovechada de varias formas cuando el valor de la variable de la función externa cambia antes de que la closure sea llamada.

3. **Bugs de los closures:** Como los closures tienen acceso a los valores actualizados de las variables de las funciones externas, esto puede llevar a generar "bugs" cuando la variable de la función externa cambia con un loop `for`. Como se accede al valor actualizado de la variable externa por referencia, se accede al valor cambiado de la variable `i` ya que la función externa corre la totalidad del loop `for` y retorna el último valor de `i`. Para arreglar este efecto secundario ("bug") de los closures, se puede usar una **expresión de función de invocación inmediata (IIFE, Immediately Invoked Function Expression)**, que son funciones que se ejecutan inmediátamente cuando se declaran.

Para más información sobre **closures**, consultar en los siguientes enlaces:

- [JavaScript.isSexy](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
- [How to Node](http://howtonode.org/why-use-closure)
