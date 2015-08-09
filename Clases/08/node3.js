// Recibir un directorio por parámetro e imprimir 1 sola vez por consola los directorios contenidos en esa ruta.

var fs = require('fs');
var path = require('path');
var subdirectorios = [];
var nombreDirectorio = process.argv[2];
var procesados = 0;

function isDirectoryHandler(archivos, posicion) {
  return function (err, stats) {
    
    procesados++;
    
    if(err){
      console.log("Hay un error: " + err);
      return;
    }

    if (stats.isDirectory()) {
      subdirectorios.push(archivos[posicion]);
    }
    
    if (procesados === archivos.length){
      console.log(subdirectorios);
    }
  }
}

function directorios() {    
  fs.readdir(nombreDirectorio, function (error, files) {
       
    if (error) {
      console.log("Hay un error: " + error);
      return;
    }

    for (var i = 0; i < files.length; i++) {

      var absFilename = path.join(nombreDirectorio, files[i]);

      fs.stat(absFilename, isDirectoryHandler(files, i));
    
    }
  });
}

directorios();