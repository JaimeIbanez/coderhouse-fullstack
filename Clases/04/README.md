# JavaScript #

## Sobre JavaScript

Los lenguajes de programación se pueden catalogar por nivel de abstracción:

- **Bajo nivel:** Assembler (más cercano al hardware), C, ALGOL.
- **Alto nivel:** Python, Java, C#, JavaScript, Scheme, Lisp, etc.

A su vez, los lenguajes de programación de alto nivel se pueden subdividir por su forma de tipado:

- **Estático:** explicita el tipo de cada variable.
- **Dinámico:** no necesita explicitar el tipo de cada variable.

Una **variable** es una referencia a un valor.

### Características de JavaScript ###

- Tipado dinámico.
- Herencia prototipada.
- Funciones de orden superior (las funciones pueden tener como parámetro otra función).

HTML era un lenguaje muy estático, no permitía que el usuario interactúe con la página. Se introdujo CSS pero sólo era dinámica la animación. Es por esto que se crea JS.

**Estándares:**

- CSS3 - 2001
- HTML5 - 2008
- Node.js - 2009

***Lo nuevo en JavaScript:** renderizar imágenes 3D*

### Asincronismo ###

JavaScript es un lenguaje lineal los elementos de interfase de usuario no son reactivos, bloquean la ejecución de todos los otros procesos y no dejan que el resto del código corra hasta que su proceso se complete.

### Comentarios ###

Son notas en el documento de JavaScript con aclaraciones sobre el código. Se les antepone el comando `//`.

	// Este es un comentario

## Script ##

Para incluir código JavaScript en una página web se utiliza la etiqueta `<script>`. El código JS puede estar en el HTML (.html) poniéndolo todo dentro de esta etiqueta, o puede ponerse aparte en un archivo JS (.js) y linkearlo al HTML con dicha etiqueta.
    
	// Código JS dentro de un .html:
	<script type="text/javascript">
    	código JS;
    </script>
	
	// Código JS linkeado a través de un .js:
	<script src="./index.js" type="text/javascript"></script>

Pueden haber tantas etiquetas `<script>` como sean necesarias. Se ejecutan en orden, no pueden correr al mismo tiempo.

La etiqueta `<script>` va dentro de `<body>`, sino no es semánticamente correcto, y al final de éste para que primero cargue la página (HTML y CSS) y luego ejecute el JS.

## Statements ##

Son las líneas de código de JavaScript. No arrojan un valor cuando se ejecutan. La mayoría terminan con `;`, es opcional pero se recomienda que se deba usar.

Los *statements* se pueden agrupar en bloques de código con `{}`. Los bloques no terminan en `;`.

**OJO:** Donde se esperan *statements* puede haber **expresions**, pero no al contrario.

### Expresions ###

Son un tipo de *statements* que devuelven un valor cuando se ejecutan.

Se puede agrupar un conjunto de *expresions* con `()`. Varias *expresions* separadas por `,` las toma todas pero sólo devuelve el valor de la última.

## Tipos de datos en JavaScript ##

- **string:** cadena de texto, secuencia de caracteres, va entre comillas (simples `''` o dobles `""`). Puede usarse un tipo de comillas dentro de otra (`"'...'"`). Para usar el mismo tipo de comillas, añadir a las internas `\`.
- **number:** valor numérico, no va entre comillas. Son de *punto flotante*, es decir, son decimales.
- **boolean:** dato que puede ser verdadero o falso (`true/false`).
- **null:** representa la ausencia de valor de un **object**, no un **object** vacío.
- **undefined:** no devuelve nada o hay un error.
- **object:** resto de datos.

### Type Of ###

Es un operador que devuelve el tipo de dato de un dato o expresion. No funciona con el tipo de dato *null*.

    typeof dato/expresion

## Función ##

Permite agrupar *statements*, grupos funcionales de código que se pueden ejecutar varias veces llamándolas a través de un nombre identificador.

Se denominan **parámetros** a los valores que necesita una función para ejecutarse. Una función puede no necesitar **parámetros**.

### Alertas ###

Es una función que genera un mensaje de alerta pop-up, bloquean todo el navegador/código hasta cerrarlos.

    alert(“mensaje”);

### Prompts ###

Es una función que solicita información al usuario y devuelve dicha información.

    prompt(“mensaje”);
	prompt(“mensaje”, valor_default);

**Aclaración:** `alert()` y `prompt()` son funcionalidades del navegador que son llamadas por JavaScript, `typeof` es un operador embebido en JavaScript.

## Variables ##

Permite acceder a una posición de memoria (dato) a través de un *identificador* (nombre).

Para declarar (crear) una variable se utiliza la función `var` junto con un identificador. Siempre se debe declarar una variable antes de usarla. 

	var nombreVariable;

Separando con `,` se pueden declarar varias variables a la vez. Se recomienda declarar todas las variables al inicio del código. En JS cuando se declara una variable no se especifica el tipo de dato que contiene.

### Reglas de identificadores ###

1. Tiene que empezar con una letra
2. No puede empezar con número.
3. Sólo puede usar el carácter `_`.

**Sugerencia:** Se recomienda usar **camelCase** (empezar con minúscula y la siguiente palabra compuesta con mayúscula. Ejemplo: *nombreVariable*

Escribiendo el nombre o identificador de la variable se la puede llamar para ser utilizada.

	nombreVariable;

Para asignarle un valor a una variable se la llama por su identificador y se lo iguala con un valor. Esto se puede hacer también cuando se declara la variable.

    nombreVariable = valor;

Las variables que se declaran sin especificar un valor inicial toman como valor default *undefined*.

## Operadores ##

Los datos a operar tienen que tener el mismo tipo de dato para que pueda funcionar el operador.

### Funciones de conversión de tipo de datos ###

#### String ####

Convierte una expresión en un tipo de dato de texto.

    String(dato);

#### Number ####

Convierte una expresión en un tipo de dato numérico.

	Number(dato);

Algunos casos:

    • true = 1
    • false = 0
    • null = 0
    • undefined = NaN (Not a Number)
    • “string” = NaN

#### Boolean ####

Convierte una expresión en un tipo de dato booleano.

	Boolean(dato);

Algunos casos:

    •	“” = false	// String vacío
    •	0 = false
    •	undefined = false
    •	null = false
    •	NaN = false
    •	Todo lo demás = true

### Operadores matemáticos ###

- Suma: `+`
- Resta: `-`
- Multiplicación: `*` 
- División: `/`
- Resto: `%`

#### Suma ####

Expresión que suma/concatena dos expresiones utilizando el operador `+`. Primero evalúa el tipo de dato de cada expresión, si hay un *string* el resultado es *string*, si hay un *number* (y no hay *string*) el resultado es *number*, si no hay *string* ni *number* el resultado es *number*.

	1 + 1 = 2;
	"hola" + "pepe" = "holapepe";
	"hola" + 1 = "hola1";

Si la operación es sólo el operador seguido de una única expresión, convierte la expresión a *number*.

	+ “1” = 1;

Si a una expresión se le suma un string vacío, convierte la expresión en un *string*.

	1 + “” = “1”;

#### Resto ####

Expresión que divide dos números con el operador `%` y devuelve como resultado el residuo de la división.

    dividento % divisor; // = residuo

###### Infinito ######

Número infinito: `infinity`

### Operadores lógicos ###

#### Negación ####

Trae el valor opuesto de una expresión booleana anteponiéndole el operador `!`.

	!true // = false

#### And ####

Compara varias expresiones con el operador `&&`. Devuelve `true` si **todas** las expresiones son `true`, sino trae `false`.

	expresion1 && expresion2

#### Or ####

Compara varias expresiones con el operador `||`. Devuelve `true` si **al menos una** de las expresiones son `true`, sino trae `false`.

	expresion1 || expresion2

### Operadores comparativos ###

- Mayor que: `>`
- Menor que: `<`
- Igual a: `==` - Sólo valida el valor del dato y no el tipo de dato. `===` - Valida valor y tipo de dato.
- Mayor o igual: `>=`
- Menor o igual: `<=`
- Distinto de: `!=` - No estricto. `!==` - Estricto.

## Strings ##

Los strings son inmutables, no se pueden cambiar.

`nombreString[posición];` - Devuelve el caracter de un string en una posición dada (el primer caracter tiene posición 0).

## Statements ##

### If / Else If ###

Es un statement condicional que ejecuta un bloque de código si se cumple una condición.

	if (condición) { código; }

En caso de que se deseen ejecutar otros bloques de código cuando se cumplan otras condiciones, se le pueden agregar al `if` con el statement `else if`. Para todo el resto de casos no contemplados en las condiciones anteriores, se puede optar también por el statement `else`.

    if (condición1) {
		código;
	} [else if (condición2) {
		código;
	} else if (condición_n) {
		código;
	} else {
		código;
	}]
    // […] - Opcional


> Operador ternario - operador que toma 3 argumentos, se usa para simplificar condicionales if.

### While ###

Es un statement cíclico que se ejecuta mientras se cumpla una condición (condición de corte).

	while (condición) { código; }

Dentro del bloque de código a ejecutar debe haber algún método (usualmente con una variable contador o variable switch) para que en alguna iteración del loop se deje de cumplir la condición del `while` y salga del mismo. Si esto no sucede, la ejecución quedará atrapada en un loop infinito y se traba todo el proceso.

## Contadores ##

`i += n` - Va contando de a **n** números. Aplica para cualquier operador matemático.

`i++` - Devuelve el valor de **i** y luego incrementa su valor (de a 1).

`++i` - Incrementa el valor de **i** (de a 1) y luego muestra su valor.

----------

# Consola #

`Navegador - Inspeccionar elemento – Console` - Acceder a la consola del navegador.

`Ctrl + L` - Limpiar la consola del navegador.

`console.log(“…”)` - Imprimir un mensaje en la consola.

----------

# Coderhouse #

## Trabajo Práctico Integrador ##

Se va a asignar un TP que va a incluir todos los temas que se van viendo en clase en un único proyecto integral. Se puede realizar utilizando ***Bootstrap*** o *Flexbox* (se recomienda usar el que sepamos menos para aprenderlo más).

**Bootstrap:** Framework CSS para que la página sea responsive (adaptarse al viewport) - **Consultar**

**Sass - Less: Consultar**