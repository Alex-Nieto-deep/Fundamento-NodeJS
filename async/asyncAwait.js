async function hola(nombre, miCallback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log('Hola ' + nombre );
      resolve(nombre);
    }, 1000)
  });
}

async function adios(nombre) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Adios ' + nombre);
      resolve();
    }, 1000);
  })
}

async function hablar(nombre) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('este es un importante anuncio');
      resolve(nombre);
      reject('hubo un error');
    }, 1000);
  })
}

async function main() {
  const nombre = await hola('Alex');
  await hablar();
  await adios(nombre);
}

console.log('Iniciando procesos');
main();
console.log('Va a ser la segunda instruccion en ejecutarse');
