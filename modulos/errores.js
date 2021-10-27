const otraFunction = () => serompe()

function serompe() {
  return 3 + z;
}

function serompeAsincro() {
  setTimeout(function() {
    try {
      return 3 + z;
    } catch(e) {
      console.error('Error en mi function asincrona')
    }
  })
}

try {
  // otraFunction()
  serompeAsincro();
} catch (e) {
  console.error('vaya, algo se ha roto');
  console.error(e.message);
}

console.log('Esto esta al final');