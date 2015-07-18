# JavaScript #

## Statements ##

### While ###

Es un statement cíclico que se ejecuta mientras se cumpla una condición (condición de corte).

	while (condición) { código; }

Se recomienda usar cuando no se tiene claro cuantas iteraciones del loop deben ejecutarse hasta cumplir la condición de corte.

### Do While ###

Es un statement cíclico similar al while, con la particularidad que primero ejecuta el código y luego evalua la condición de corte. Esto garantiza que el bloque de código se ejecute al menos una vez.

	do { código; } while (condición)

### For ###

Es un statement cíclico que inicializa una variable contador, evalua si dicha variable cumple con la condición de corte, ejecuta el código y modifica el valor de dicha variable.

	for (init_stmt; cond_stmt; var_stmt) { código; }
	
	for (i = 0; i < n; i++) { código; }

 Se recomienda usar para un número específico de iteraciones del loop que cumplan una única condición. Sino, es mejor usar `while`.

### Switch ###

Es un statement condicional que establece una condición y define una serie de posibles valores que puede tomar (casos) y qué lineas de código ejecutar en cada caso. También define un caso *default* que contempla el resto de opciones no especificadas en los casos previos.

    switch(condición) {
    	case expr1:
    		código;
    		break;
    
    	case expr2:
    		código;
    		break;
    
    // ...
    
      	default:
    		código;
			break; //opcional
    }

Se recomienda usar en vez de un `if` con muchas condiciones `else if`.

## Otras funciones ##

### Break ###

Es una función que corta la ejecución de un statement. El break salta afuera de un loop.

	break;

### Continue ###

Es una función que salta una iteración dentro de un loop.

	continue;

### Is NaN ###

Es una función que evalúa si su parámetro es **NaN** (Not a Number).

	isNaN(NaN) = true;
	isNaN(resto) = false;

### Length ###

Es una función que indica la cantidad de caracteres de un *string*.

	nombreString.length

### Substring ###

Es una función que trae una parte de un *string*. Se indican las posiciones desde y hasta donde se quiere tomar el substring. Si sólo se le indica una posición, toma el substring desde la posición 0 hasta la indicada. 

	nombreString.substring(inicio,fin)

### Substr ###

Es una función que trae una parte de un *string*. Se indica la posición desde donde se quiere tomar el substring y la cantidad de caracteres a tomar. Si sólo se le indica la posición inicial, toma el substring desde dicha posición hasta el final. 

	nombreString.substr(inicio,cantidad)

La posición inicial puede ser un número negativo, con lo cual empieza a contar de atrás hacia adelante y a partir de allí toma el substring.

### Index Of ###

Es una función que busca un substring dentro de un string y devuelve la posición donde lo encuentra. En caso de no encontrarlo, devuelve el valor `-1`.

	nombreString.indexOf("subString")

### Last Index Of ###

Es una función que hace lo mismo que indexOf() pero empieza contando hacia atrás.

	nombreString.lastIndexOf("subString")

### To Upper Case ###

Es una función que convierte un string en su totalidad a mayúsculas.

    nombreString.toUpperCase()

### To Lower Case ###

Es una función que convierte un string en su totalidad a minúsculas.

	nombreString.toLowerCase()

### Algunas funciones matemáticas ###

- `Math.PI` - Devuelve el número pi.
- `Math.pow(base, exponente)` - Calcula potencias, eleva un número a una potencia.

## Variables especiales ##

###### Contador ######

Es una variable usada para contar algo. Se debe inicializar en 0 ya que sino queda con valor inicial *undefined* y no funcionará el contador.

    varContador = 0;

###### Bandera ######

Es una variable *boolean* usada para salir de un loop. Se incluye en la condición de un statement cíclico, y cuando se "activa" la bandera (`= true`) se termina el loop.

	varBandera = false;

## Datos compuestos ##

### Array ###

Es una lista de elementos. Funciona muy similar a las variables, pero en vez de contener un único dato, puede contener varios (min = 0, max < 2 ^ 32). Un array puede contener distintos tipos de datos, pero se recomienda que todos los elementos de un mismo array tengan el mismo tipo de datos.

#### Crear un array ####

`Array(número);` - Crear un array con una cantidad de posiciones dada.

`var nombreArray = [dato1, dato2, ...];` - Declarar un array.

`var nombreArray = [];` - Declarar un array vacío. 

#### Inspeccionar un array ####

`nombreArray.length;` - Consultar la cantidad de elementos de un array.

`nombreArray[posición];` - Ver el elemento de un array en una posición dada.

`nombreArray.indexOf(dato);` y `nombreArray.lastIndexOf(dato);` - Buscar un elemento específico dentro del array.

#### Modificar un array ####

##### Añadir a un array #####

`nombreArray.push(dato);` - Agregar un elemento (al final) de un array. Devuelve la nueva longitud del array.

`nombreArray[nombreArray.length] = dato;` - Agregar un nuevo elemento al final de un array.

Si el nuevo elemento se agrega en una posición más larga que su longitud, completa las posiciones faltantes con elementos vacíos (*undefined*).

A un array con "huecos" se le conoce como **array disperso**.

`nombreArray[posición] = dato;` - Asignar o modificar elemento de un array en la posición dada.

`nombreArray.unshift(dato);` - Insertar un elemento al principio del array.

##### Suprimir a un array #####

`nombreArray.pop();` - Eliminar el último elemento del array. Devuelve el valor del elemento eliminado, si no quedan más elementos devuelve *undefined*.

`nombreArray.shift();` - Eliminar el primer elemento del array. Devuelve el valor del elemento eliminado.

`dato in nombreArray;` - Validar si hay un hueco en el array. Devuelve *true* si hay algo (incluso *undefined*), y *false* si no encuentra nada (hueco).

##### Alterar a un array #####

`nombreArray.reverse();` - Invertir el orden de los elementos de un array.

----------

# Console #

`console.log(dato1, dato2);` - Imprimir datos en la consola separados por espacios.

----------

# Sublime Text #

### Emmet ###

Plug-in con shortcuts para programar (HTML, CSS y más.)

	Ctrl + Shift + P - Install Package - Emmet