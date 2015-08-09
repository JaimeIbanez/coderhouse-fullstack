// Concatenar el contenido de varios archivos de texto especificados por parámetro en el orden que se pasaron los nombres de archivos al node
// No utilizar readFileSync()

var fs = require('fs');

var fileNames = process.argv.slice(2);
var curFilename;
var filesContents = [];
var processed = 0;

function createReadHandler(position) {
	return function(error, content) {
		var result;
		processed++;
		if (error) {
			console.log(error);
			return;
		}
		filesContents[position] = content;
		if (processed === fileNames.length) {
			result = filesContents.reduce(function(prevContent, curContent) {
				return prevContent + curContent;
			}, "");
			console.log(result);
		}
	};
}

for (var i = 0; i < fileNames.length; i++) {
	curFilename = fileNames[i];
	fs.readFile(curFilename, 'UTF8', createReadHandler(i));
}


// Concatenar no ordenado:

// var fs = require('fs');
// var curFilename;
// var filenames = process.argv.slice(2);
// var i;
// var processed = 0;
// var result;

// for (i = 0; i < filenames.length; i++) {
// 	curFilename = filenames[i];

// 	fs.readFile(curFilename, 'UTF8', function onFileRead(error, content) {
// 		processed++;

// 		if (error) {
// 			console.log(error);
// 			return;
// 		}

// 		result += content;

// 		if (processed === filenames.length) {
// 			console.log(result);
// 		}
// 	});
// }
