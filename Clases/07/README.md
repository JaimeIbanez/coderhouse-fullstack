# JavaScript #

## Métodos ##

### Trim (string) ###

Es un método que remueve los espacios en blanco de ambos extremos (inicial y final) de un string.

	nombreString.trim();

### Index Of (string) ###

Es un método que devuelve el índice de la primera ocurrencia de un valor especificado en un string, empezando la búsqueda desde un índice dado. Si no se encuentra dicho valor devuelve `-1`.

	nombreString.indexOf(valorBuscar[, indiceInicial]); // []: Opcional

Es opcional indicar la posición del string desde la cual se va a inicial la búsqueda. Su valor default es 0.

### Some (arrays) ###

Es un método que verifica si algún elemento de un array cumple con la condición establecida en una función.

	nombreArray.some(function(curEl, curIndex, array) {
		condición ... código;
		return resultado; // resultado debe ser true o false
	});

El método `some()` ejecuta una función una vez por cada elemento presente en el array hasta que encuentre uno donde retorna un valor verdadero (`true`). Si se encuentra dicho elemento, `some()` retorna `true` inmediatamente. Sino, `some()` retorna `false`.

La función es invocada sólo para los índices del array que tienen valores asignados; no es invocada para índices que han sido borrados o a los que nunca se les han asignado valores.

### Sort (array) ###

Es un método para ordenar los elementos de un array. Opcionalmente se le puede especificar una función que defina el critero de ordenamiento; si no se indica nada, ordena en orden alfabético (**ojo: no numérico**).

	nombreArray.sort([funcionComparacion]);

**Función comparación:**

	function funcionComparacion(a, b) {
		if (a es menor que b por algún criterio de ordenamiento) {
	    	return -1;
	  	}
	  	if (a es mayor que b por el criterio de ordenamiento) {
	    	return 1;
	  	}
	  	// a debe ser igual b
	  	return 0;
	}

- Si funcionComparacion(a, b) es menor que 0, ordena a en un indice menor que b (a va primero).
- Si funcionComparacion(a, b) es mayor que 0, ordena b en un indice menor que a (b va primero).

**Ordenar ascendentemente los números de un array:**

	nombreArray.sort(function(a, b) {
		return a - b;
	});

**Ordenar ascendentemente los números de un array:**

	nombreArray.sort(function(a, b) {
		return b - a;
	});

## Funciones ##

Aunque no se declare una variable que usa una función como parámetro, si al declarar una función se la define como parámetro, cuando se la llama a dicha función es como si implicitamente se declarara el parámetro.

    // var parametro;
	function nombreFuncion(parametro) {
		console.log(parametro);
	}
	nombreFuncion();

Si una variable se inicializa dentro de una función **sin declararla** ( `var` ), es equivalente a declararla e inicializarla en el ambiente global. **No se recomienda hacer** porque dificulta la trazabilidad de la secuencia del código.

    // var variableX = valorX;
	function nombreFuncion(parametro) {
		variableX = valorX;
		código;
	}
	nombreFuncion(valorParametro);

Al igual que las variables, las funciones se pueden utilizar antes de declararlas.

	nombreFuncion(valorParametro);	
	function nombreFuncion(parametro) {
		variableX = valorX;
		código;
	}

## Objetos ##

Todo lo que no sea un tipo de dato primitivo, es un objeto. Se puede utilizar como un contenedor de variables, valores o funciones, a las cuales se pueden acceder a través de **keys**.

Un objeto es una entidad independiente con una colección de **propiedades**, y una propiedad es una asociación entre un *nombre* (**key**) y un *valor*. Un valor de propiedad puede ser cualquier tipo de dato, incluso una *función* (la cual es conocida como un **método** del objeto).

Una **propiedad** de un objeto puede ser explicada como una variable que se adjunta al objeto. Las propiedades de un objeto definen las características de un objeto.

Un objeto, al igual que una variable, tiene un nombre identificador con el cual se la invoca. Las propiedades se agrupan dentro del contenedor `{}` y separadas por `,`. Cada propiedad muestra su key y valor separados por `:`.

	nombreObjeto = {keyProp1: valor1, keyProp2: valor2, ...};

Más información sobre objetos en el siguiente [enlace](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos).

### Declarar un objeto ###

Un objeto se puede declarar con el comando `var` al igual que una variable.

**Declarar un objeto vacío:**

	var miObjeto = {};

	var miObjeto = new Object(); 

### Asignar propiedades a un objeto ###

Se le puede asignar una propiedad a un objeto igualándola a dicha propiedad encerrada por `{}`, dentro de los cuales se indica su key y valor separados por `:`.

	miObjeto = {key: valor};

Se pueden asignar varias propiedades separadas por `,`.

	miObjeto = {key1: valor1; key2: valor2};

Otras forma de asignar propiedades a un objeto:

- Usando `[]`:

		miObjeto["key3"] = valor3;

- Usando `.`:

		miObjeto.key4 = valor4;

### Llamar propiedades de un objeto ###

Se puede llamar al valor de una propiedad a través del nombre del objeto y la key de la propiedad separados por `[]` o por `.` .

	miObjeto["key1"]; // = valor1
	
	miObjeto.key2; // = valor2

### Key ###

Es el nombre identificador de las propiedades de un objeto. Una key siempre va a ser un *string*. Si se le da otro tipo de dato lo intenta convertir a *string*. Como siempre intenta convertir a *string*, se puede dar el *string* sin `""` (agiliza la escritura del código).

El valor asociado a una key puede contener ser lo que sea: numero, string, boolean, array, incluso una función u otro objeto.

Si el nombre de una key empieza con un número, no se puede llamar a su valor asociado con la sintaxis de `.`, sólo se puede llamar con `[]`.

	miObjeto.1key; // INCORRECTO
	miObjeto["1key"]; // CORRECTO

Si se desea llamar dinámicamente a las propiedades de un objeto utilizado una **variable** que contenga (o vaya modificando su valor por) las keys de las mismas, también es necesario usar la sintaxis de `[]`.

	miObjeto[miVariable];

### Object.keys ###

Es un método de los objetos para listar sus keys. Devuelve en un **array** el listado de todas las keys de las propiedades del objeto, donde cada elemento del array es un *string*.

	Object.keys(miObjeto);

## Programación Orientada a Eventos ##

***Observación:** Esta definición no la vimos en clase, información obtenida de internet.*

La programación orientada a eventos es un paradigma de programación en el que tanto la estructura como la ejecución de los programas van determinados por los sucesos que ocurran en el sistema, definidos por el usuario o que ellos mismos provoquen.

Para entender la programación orientada a eventos, podemos oponerla a lo que no es: mientras en la programación secuencial (o estructurada) es el programador el que define cuál va a ser el flujo del programa, en la programación orientada a eventos será el propio usuario (o lo que sea que esté accionando el programa) el que dirija el flujo del programa. Aunque en la programación secuencial puede haber intervención de un agente externo al programa, estas intervenciones ocurrirán cuando el programador lo haya determinado, y no en cualquier momento como puede ser en el caso de la programación orientada a eventos.

En la programación orientada a eventos, al comenzar la ejecución del programa se llevarán a cabo las inicializaciones y demás código inicial y a continuación el programa quedará bloqueado hasta que se produzca algún evento. Cuando alguno de los eventos esperados por el programa tenga lugar, el programa pasará a ejecutar el código del correspondiente administrador de evento. Por ejemplo, si el evento consiste en que el usuario haga clic en el botón de play de un reproductor de películas, se ejecutará el código del administrador de evento, que será el que haga que la película se muestre por pantalla.

**Fuente: Wikipedia*

## Document Object Model (DOM) ##

El DOM es un API para documentos HTML y XML. Proporciona una representación estructural del documento (es decir, un conjunto estándar de objetos), permitiendo el acceso y la modificación de su contenido o su presentación visual. Esencialmente, comunica las páginas web con los scripts o los lenguajes de programación.

El DOM permite ver el mismo documento de otra manera, describiendo el contenido del documento como un conjunto de objetos que un programa JavaScript puede actuar sobre ellos.

El DOM es una de las innovaciones que más ha influido en el desarrollo de las páginas web dinámicas y de las aplicaciones web más complejas.

Cada elemento del DOM tiene una interfaz para acceder a él.

### Document ###

En el DOM, el objeto `document` representa a la página web y es el dueño de todos los demás objetos de la página. Si se quiere acceder a los objetos en una página HTML, siempre se puede empezar accediendo al objeto `document`.

#### Métodos de Document

A continuación se muestran algunos ejemplos de cómo se pueden usar **métodos** del objeto `document` para acceder y manipular el HTML:

`document.getElementById("nombreId")` - Busca un elemento por su nombre de id.

`document.getElementsByTagName("nombreEtiqueta")` - Busca un conjunto de elementos por su nombre de etiqueta.

`document.getElementsByClassName("nombreClase")` - Busca un conjunto de elementos por su nombre de clase. Devuelve un objeto similñar a un array.

`document.createElement("nombreEtiqueta")` - Crear un elemento HTML.

`document.write("texto")` - Escribir texto directamente en el HTML.

----------

# jQuery #

## Sobre jQuery ##

Es una **biblioteca** de JavaScript. Una biblioteca es un conjunto de implementaciones funcionales que ofrece una interfaz bien definida para la funcionalidad que se invoca; a diferencia de un programa ejecutable, el comportamiento que implementa una biblioteca no espera ser utilizada de forma autónoma.

jQuery ofrece un conjunto de funciones en JS que esperan ser llamadas para ejecutarse y devolver distintos resultados dependiendo de lo que se invoque.

Provee una variable global llamada `$` o `jQuery` para acceder a las funcionalidades de jQuery.

Con jQuery se pueden acceder a los elementos de mi DOM usando **selectores** (referencias a distintos elementos).

    document.querySelector("nombreSelector") // Forma antigua de acceder a selectores
    
    $("nombreSelector"); // Forma nueva de acceder a selectores usando jQuery

Esto devuelve un objeto que representa una lista de elementos del DOM. Funciona parecido a un array, pero no es array. Se puede usar la propiedad `length` para ver la cantidad de elementos del "array", y ver los valores específicos de cada elemento indicando la posición entre `[]`.

    $("nombreSelector").length;
    $("nombreSelector")[index];

`Object.prototype.toString.call($("nombreSelector")[index]);` - Consultar tipo de dato de un selector.

## Acciones ##

`$("nombreSelector")[index].value;` - Mostrar valor.

`$("nombreSelector")[index].value = valor;` - Asignar/modificar valor.

`$("nombreSelector")[index].attr("atributo");` - Acceder a un atributo.

`$("nombreSelector")[index].attr("atributo", valor);` - Asignar/modificar valor a un atributo.

`Object.keys($("nombreSelector"));` - Mostrar listado de métodos propios del selector.

`Object.keys(Object.getPrototypeOf($("nombreSelector")));` - Mostrar listado de métodos del padre del selector.

`$("nombreSelector").keydown(function(){});` - Ejecutar una función siempre que se presione una tecla sobre el selector

**Nota:** Un **keycode** es un número que representa el id de una tecla.

`setTimeout(function(){código}, tiempoEnMilisegundos);` - Ejecutar una función después de un tiempo dado (ejecución programada).

`setInterval(function(){código}, tiempoEnMilisegundos);` - Ejecutar una función de forma repetitiva en un intervalo de tiempo dado (ejecución cíclica).

**Nota:** El ojo humano detecta hasta 60 fotos por segundo (fps). Es necesario tener en cuenta esto a la hora de definir tiempos de ejecución de funciones para asegurar una vista fluida de movimiento.

----------

# Resolver problemas #

1. **Rara vez se empieza con código.** Se debe analizar bien qué es lo que hay que hacer y entenderlo antes de empezar a codificar.
2. **Abstraerse de los formalismos.** Independientemente del lenguaje de programación que se va a usar, definir los conceptos o acciones abstractas que debe realizar el programa.
3. **Ir de la abstracción a la implementación concreta.** Intentar traducir la solución a un código.

----------

# GitHub #

## Hostear Páginas Web ##

GitHub permite hostear los proyectos que se suben a su repositorio remoto. Una ves hosteados se puede acceder a ellos a través del **URL**:

##### http://*username*.github.io/*repository* #####

Instrucciones de cómo hostear en GitHub en el siguiente [enlace](https://pages.github.com/).
