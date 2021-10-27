const fs = require('fs');

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error('Error al escribir en el Archivo' ,err);
    }
    console.log('Se escribio correctamente');
  })
}

const borrar = (ruta, cb) => {
  fs.unlink(ruta, (err) => {
    // console.error('no se encontro el archivo', err);
  })
}

escribir(__dirname + '/archivo.txt', 'Soy un archivo nuevo', console.log)
// borrar(__dirname + '/archivo.txt', console.log)
// leer(__dirname + '/archivo.txt', console.log);