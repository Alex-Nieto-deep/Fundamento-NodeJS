function hola(nombre, miCallback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log('Hola ' + nombre );
      resolve(nombre);
    }, 1000)
  });
}

function adios(nombre) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Adios ' + nombre);
      resolve();
    }, 1000);
  })
}

function hablar(nombre) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('este es un importante anuncio');
      // resolve(nombre);
      reject('hubo un error');
    }, 1000);
  })
}

// promises

console.log('Iniciando el proceso');
hola('ALex')
  .then(hablar)
  .then(adios)
  .then(() => console.log('Termiando el proceso'))
  .catch(err => {
    console.error('Algo fallo. moment of panic')
    console.error(err)
  });
