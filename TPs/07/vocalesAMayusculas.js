// node pasarAMayusculas.js miArchivoDeTexto.txt

var fs = require('fs');
var fileName = process.argv[2]; // Archivo de texto base
var fileContent = '';
var fileContentUpper = '';

function vowelsUpperCase() {
	fs.readFile(fileName, 'utf8', function(error, content) {
		if (error) {
			console.log('Error:', error);
			return;
		}
		fileContent = content; // Obtener contenido del archivo de texto
		for (var i = 0; i < fileContent.length; i++) { // Recorrer los caracteres del contenido
			var character = fileContent[i];
			if ( // Validar si el caracter es una vocal
				character === 'a'
				|| character === 'e'
				|| character === 'i'
				|| character === 'o'
				|| character === 'u'
			) {
				fileContentUpper += character.toUpperCase(); // Si es vocal, convertir a mayúscula y concatenar
			} else {
				fileContentUpper += character; // Concatenar
			}
		}

		fs.writeFile('miArchivoDeTextoMayus.txt', fileContentUpper, function(error) { // Crear nuevo archivo con nuevo contenido
			if (error) {
				console.log('Error:', error);
				return;
			}
			console.log("Nuevo archivo de texto creado con vocales en mayúscula"); // Mensaje de aviso de proceso completado
		});
	});
}

vowelsUpperCase();