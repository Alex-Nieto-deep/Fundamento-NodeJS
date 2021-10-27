function hola(nombre, miCallback) {
  setTimeout(function() {
    console.log('Hola ' + nombre );
    miCallback(nombre);
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(function() {
    console.log('Adios ' + nombre);
    otroCallback();
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function() {
    console.log('este es un importante anuncio');
    callbackHablar();
  }, 1000);
}

function conversation(nombre, veces, callback) {
  if ( veces > 0) {
    hablar(function() {
      conversation(nombre, veces - 1, callback);
    })
  } else {
    adios(nombre, callback);
  }
}

// CallbackHell

console.log('Iniciando procesos');
hola('Alex', function (nombre) {
  conversation(nombre, 3, function() {
    console.log('Processo terminado')
  });
})

// hola('alex', function(nombre) {
//   hablar(function() {
//     adios(nombre, function() {
//       console.log('Termiando processos');
//     })
//   })
// });


