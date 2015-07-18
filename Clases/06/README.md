# JavaScript #

## Funciones ##

Son bloques de códgo que realizan una acción y que pueden ser reutilizados.

**OJO: `algo.funcion()` - es un método, una función contenida en ese "algo" de la izquierda**

### Declarar una función ###

Se utiliza el comando `function` seguida del nombre que se le va a dar a dicha función (identificador), se le indican las expresiones que va a tomar como parámetro y el statement o bloque de código que va a ejecutar.

    function nombreFunction(expresion1, expresion2, ...) {
		statement;
	}

***Nota: Los parámetros no se declaran antes de la función.***

Una función se considera **dinámica** si se le definen parámetros de entrada, ya que la ejecución genera distintos resultados dependiendo de valores externos a ella. Sino, se le llama **estática** porque su ejecución no depende de parámetros externos.

### Llamar una función ###

Se invoca a la función con su nombre identificador y se le indican los valores de los parámetros con los que se va a ejecutar.

    nombreFunction(valor1, valor2, ...);

Para imprimir el resultado de una función en la consola se encierra el llamado de la función en un `console.log()`.

	console.log(nombreFunction(valor1, valor2, ...));

Se puede guardar el resultado de una función asignándole a una variable el llamado de la función.

	var resultadoFunction;
	resultadoFunction = nombreFunction(valor1, valor2, ...);

### Retorno de una función ###

Para que la función devuelva un valor específico, se define una variable de retorno y al final del código dentro de la función se la llama con el comando `return`.

	function nombreFunction(expresion1, expresion2, ...) {
		var varRetorno;
		...
		código;
		...
		return varRetorno;
	}

Se puede utilizar el comando `return` vacío para cortar en funcionamiento de una función. Esto se conoce como **early return**.

    return;

### Excepciones ###

Cuando se ejecuta una función pueden ocurrir distintos tipos de error. Los errores pueden ser errores de código del programador, errores por un tipo de dato de entrada incorrecto, etc. 

Es por esto que se se utilizan los comandos `throw` y `try` - `catch`:

- **Throw:** Permite lanzar errores customizados. Se recomienda lanzar un error con  el comando `new Error()`.
- **Try:** Permite probar si tiene errores un bloque de código cuando se ejecuta.
- **Catch:** Permite ejecutar un bloque de código si un error ocurre en el bloque de `try`.

**Ejemplo:**

    function nombreFunction(expresion1, expresion2, ...) {
    	// caso error
    	throw new Error("Mensaje de error");
    	// caso normal
    	return varRetorno;
    }
    
    try {
    	resultadoFunction = nombreFunction(valor1, valor2, ...);
    } catch (e) {
    	código error;
    }

Cuando ocurre un error se corta el flujo normal del programa.

Si el `catch` está vacío se silencia el error (**NO SE RECOMIENDA HACER**).

Si no se va a hacer nada útil con el error no es necesario usar `try` - `catch`.

### Scope ###

**Ejemplo 1:** Si una variable se declara dentro de una función, sólo puede usarse dentro de dicha función. Esta es una variable **local**.

**Ejemplo 2:** Si una variable se declara en el código general, es decir, no la contiene ninguna función, puede usarse en todo el código, incluso dentro de las funciones. Esta es una variable **global**.

Las funciones definen los ámbitos (scopes). Los ámbitos cascadean hacia adentro, no hacia afuera. 

Las variables que se modifican "pisando" (declarando) en el ambiente local no alteran su valor en el ambiente global. Si se modifica una variable asignandole un nuevo valor (sin declarar) en el ambiente local, si se altera su valor en el ambiente global.

#### Hoisting ####

En JavaScript, las declaraciones de variables son procesadas antes de que se ejecute cualquier código, es por esto que declarar una variable en cualquier parte del código es equivalente a declararla arriba de todo. Esto implica que una variable puede ser declarada después de haber sido usada; en otras palabras, se puede usar una variable antes de declararla. Este comportamiento se conoce como **hoisting**, ya que parece que las declaraciones de variables son "movidas" arriba del código global o de la función (dependiendo del scope). **El hoisting no aplica a las inicializaciones de las variables.**

No importa donde se haya definido una variable, JS busca en todo el código las declaraciones (**NO las inicializaciones**) de variables (con el comando `var`) y los toma como si estuvieran al principio (arriba) del código. Esto se limita al ámbito (scope) donde está.

### Aridad ###

Es una propiedad de las funciones que indica la cantidad de parámetros que tiene o que necesita para funcionar. En general, entre menos parámetros tenga una función mejor.

Con la propiedad `length` se puede mostrar la cantidad de parámetros que espera una función.

	nombreFuncion.length;

### Parámetros ###

Los parámetros de una función existen aunque no se les den nombre cuando se declara la función.

- **Pasar por valor:** El argumento de la expresión es evaluado y el valor resultante está atado a la variable correspondiente de la función (copiando el valor en una nueva región de memoria). Si la función es capaz de asignarle valores a sus parámetros, solo su copia en el ambiente local es modificada; es decir, cualquier cosa que pase dentro del llamado de una función no modifica el ambiente llamante cuando la función retorna un resultado.
- **Pasar por referencia:** Una función recibe una referencia implícita de una variable usada como argumento, en vez de una copia de su valor. Esto significa que la función puede modificar (asignar un nuevo valor a) la variable usada como argumento que va a ser vista por quien la llama. Pasar por referencia puede ser usado para proveer un canal de comunicación adicional entre la funcion llamada y la función llamante. El problema es que hace más dificil para el programador rastrear los efectos del llamado de una función y puede introducir errores sutiles.

### Arguments ###

Es un objeto, una variable que existe sólo adentro de las funciones, similar a un array, que contiene en cada índice los valores de los parámetros que se le pasó a la función.

    arguments

Para conocer la cantidad de argumentos que recibe una función, se puede utilizar la propiedad `length`.

	arguments.length;

## Method borrowing ##

Es una metodología que permite tomar o "pedir prestado" un *método* asociado a un *objeto* para aplicarlo a otro *objeto*.

### Call ###

Es un método que permite cambiar lo que está a la izquierda de la estructura sintáctica de una funcionalidad y ahora se la va a aplicar al primer parámetro que se le pasa a la derecha.

	function.prototype.call();

**Ejemplo:** Transferir función de tipo de dato. 

	Object.prototype.toString.call(parametro); // Mejor que typeof

Si la funcionalidad recibe parámetros, el primer valor del call a la derecha es el que reemplaza a la estructura de la izquierda, y los sucesivos valores son los parámetros del método (separados por `,`).

**Ejemplo Slice():**

	Array.prototype.slice.call("string", inicio, fin);

Si bien las funciones no son un tipo de dato, `typeof` se puede usar para ver si algo es una funcion. Si es una función, da como resultado "function".

	typeof nombreFuncion; // "function"

Como los *arguments* son similares a los *arrays*, se puede aprovechar el **method borrowing** para transferir las funcionalidades de los arrays para los arguments.

`Array.prototype.` - Prefijo que contiene todos los métodos de los array.

**Ejemplo:** Aplicar pop() para eliminar argumentos de una función.

	Array.prototype.pop.call(arguments)

### Apply ###

Vuelve dinámico a un método `call()`. En vez de recibir un listado de parámetros, recibe un array con todos los parámetros necesarios (en el orden correspondiente).

	function.prototype.apply();

**Ejemplo:** Sustituir `call()` del "Ejemplo Slice()" con `apply()`.

	var arrayParametros = [inicio, fin];
	Array.prototype.slice.apply("string", arrayParametros);

## Métodos ##

### For Each ###

Es un método para ejecutar una función dada una vez por cada elemento de un array. Por cada elemento de un array ejecuta una función y la aplica a dicho array.

	function nombreFuncion(elemento, index, array) { código; }
	
	nombreArray.forEach(nombreFuncion);

**Ejemplo:** Recorrer un array e ir imprimiendo el elemento del array, su posición y el array completo.

	nombreArray.forEach(function(curEl, curIndex, arr) {
    	console.log(curEl, curIndex, arr);
    });

### Is Array ###

Es un método para validar si una variable es un array. Devuelve `true` si es un array, sino devuelve `false`.

	Array.isArray(dato);

### Slice ###

Es un método que devuelve un subconjunto de elementos de un array. Selecciona los elementos empezando desde la posición de un argumento inicial dado hasta, **pero no inclusive**, la posición de un elemento final dado.

	nombreArray.slice(inicio, fin);

Si no se le indica una posición final, el método slice() toma el subconjunto desde la posición inicial dada hasta el final de array.

	nombreArray.slice(inicio);

### Reduce ###

Es un método para ejecutar una función simultáneamente a dos valores de un array (de izquierda a derecha) para reducirlo a un único valor. Recibe 4 argumentos: el valor inicial (o valor de la llamada previa de funcion), el valor del elemento actual, el índice actual y el array sobre el que ocurre la iteración.

	nombreArray.reduce(function(valorPrevio, valorActual, indice, array) {
			código;
			return valorActual; // Situacional
	}, valorInicial);

La primera vez que se llama a la función, el valorPrevio y el valorActual puede ser uno de los dos valores. Si se incluye un valorInicial en la llamada a `reduce(),` entonces el valorPrevio será igual al valorInicial y el valorActual será igual al primer valor del array. Si no se incluye ningún valorInicial, entonces el valorPrevio será igual al primer valor del array y el valorActual será igual al segundo.

El parámetro valorPrevio toma valor que retorna la función en su última invocación, o el valorInicial si es suministrado.

----------

# Temas varios #

## JSDoc ##

Es una sintaxis para agregar documentación de la **API** al código fuente de JavaScript. Se documentan aclaraciones y notas en forma de comentarios directamente en el código fuente (*source code*), justo al lado del código mismo.

Esta información puede ser procesada por distintas herramientas para generar documentación del código fuente en formato HTML o RTF.

Los comentarios JSDoc generalmente deben ser puestos inmediatamente  antes del código a documentar. Deben iniciar con un `/**`, cada línea de comentarios inicia con un `*` y al final se cierran con un `*/`.

Dentro de esta estructura se añaden **descripciones** (*descriptions*) simplemente escribiendo la descripción que se quiera dentro del comentario. También se pueden añadir **etiquetas de documentación especiales** (*documentation tags*) para dar más información; estas etiquetas se añaden anteponiendo un `@`.

**Ejemplo:**

    /**
     * Descripción general de la función.
     * @etiqueta
     * @param {tipoDato} nombreParametro - Descripción parámetro.
     */
    function nombreFuncion (nombreParametro) {
    }

**Más información: [JSDoc](http://usejsdoc.org/)**

### Application Programming Interface (API) ###

Es un conjunto de subrutinas, funciones y procedimientos (o métodos) que ofrece cierta biblioteca (interfaz definida para una funcionalidad que se invoca) para ser utilizado por otro software como una capa de abstracción.

Una API es un componente de un software en términos de entradas, operaciones y salidas. Define funcionalidades que son independientes de su respectiva implementación, lo que permite hacer definiciones e implementaciones distintes sin comprometer la interfaz. Una buena API facilita el proceso de desarrollar un programa proveyendo de "bloques de contrucción" de código; un buen programador arma los bloques juntos.

Una API también puede facilitar la integración de nuevos *features* a aplicaciones existentes. Estas se conocen como ***API plug-in***.

**Subrutina:** También llamada subprograma, es un subalgoritmo que forma parte del algoritmo principal, el cual permite resolver una tarea específica.

## Hacks ##

### Acumular valores ###

`+=` - Operador abreviado que incrementa el valor de una variable en cantidad igual a otra.

    var1 += var2
    // Es equivalente a...
    var1 = var1 + var2

### Validar si una variable es undefined ###

Método 1:

    if (!nombreVariable) {
    	// Si entra al if la variable es undefined o null
    }

Método 2:

	Boolean(!nombreVariable) // Si = true, la variable es undefined o null

### Convertir un string en array ###

Convertir un string en un array que contiene en cada posición un caracter del string.

	Array.prototype.slice.call("string"); 
	// = ["s", "t", "r", "i", "n", "g"]