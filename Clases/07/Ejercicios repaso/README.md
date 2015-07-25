#Strings
## Ejercicio 1 
Hacer una función que reciba dos parámetros del tipo string. La función deberá retornar la cantidad de apariciones que tiene el segundo parámetro en el primer parámetro. Ejemplo:

```js
console.log(contarOcurrencias("sarasa", "a")); // imprime 3
console.log(contarOcurrencias("sarasa", "z")); // imprime 0
```
## Ejercicio 2
Hacer una función que reciba una string y retorne la misma string pero agregando después de cada caracter su índice correspondiente. Es decir, que retorne la misma string transformada de la siguiente forma:
```js
console.log(agregarIndice("kawabonga")); // imprime "k0w1a2b3o4n5g6a7"
console.log(agregarIndice("casa")); // imprime "c0a1s2a3"
```

# Arrays
## Ejercicio 1
Hacer una función que reciba un array de strings y retorne una string igual a la concatenación de todos sus elementos. Ejemplo:
```js
console.log(concatenar(["s","a","r","a","s","a"])); // imprime "sarasa"
console.log(concatenar(["h","o","l","a"])); // imprime "hola"
```
## Ejercicio 2
Hacer una función que reciba un array y retorne otro array con la misma cantidad de elementos, pero qué cada elemento sea el tipo de dato del array original. Ejemplo:
```js
console.log(transformarATipos([1,"casa", {}])); // imprime ["number", "string", "object"]
console.log(transformarATipos([function(){}, true]); // imprime ["function", "boolean"]
```

# Objetos
## Ejercicio 1
Hacer una función que reciba un objeto y retorne un array con todos los valores de sus propiedades cómo elementos. Ejemplo:
```js
console.log(aArrayDeValores({ a: 1, b: "z", c: 3})); // imprime [1, "z",3]
console.log(aArrayDeValores({ a: "f", b: true})); // imprime ["f", true]
```
## Ejercicio 2
Hacer una función que reciba un objeto el cual posee propiedades con valores de string y retorne una string cómo resultado de la concatenación de todos los valores de las propiedades del objeto. Ejemplo:
```js
console.log(concatenarObj({ a: "h", b:"o",c:"l", d:"a"})); // imprime "hola"
console.log(concatenarObj({ z: "sa", x:"ra", y:"sa"})); // imprime "sarasa"
```

# Resultados
- 0 ejercicios completados: va a estar difícil que sigan los temas de las próximas clases
- 1 ejercicio completado: necesitan practicar mucho más para estar cómodos con los temas de las próximas clases
- 3 ejercicios completados: tienen esperanzas de sobrevivir al curso
- 6 ejercicios completados: están camino a entender todos los temas del curso