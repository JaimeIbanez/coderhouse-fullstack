# Trabajo práctico #

Se requiere escribir un programa **vocalesAMayusculas.js​** que reciba como parámetro el nombre de un archivo, lea su contenido, reemplace todas sus vocales por mayúsculas y lo guarde en otro archivo.

Asumamos que el contenido de **miArchivoDeTexto.txt**​ es:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit tortor et velit elementum, vitae laoreet justo vulputate. Donec semper purus nec faucibus iaculis.

Entonces al ejecutar el comando **“node pasarAMayusculas.js miArchivoDeTexto.txt”**​ se debería crear el archivo **miArchivoDeTextoMayus.txt**​ conteniendo lo siguiente:

> "LOrEm IpsUm dOlOr sIt AmEt, cOnsEctEtUr AdIpIscIng ElIt. FUscE hEndrErIt tOrtOr Et vElIt ElEmEntUm, vItAE lAOrEEt jUstO vUlpUtAtE. DOnEc sEmpEr pUrUs nEc fAUcIbUs IAcUlIs."

## Recursos ##

- [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)
- [fs.writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback)
- [str.toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)