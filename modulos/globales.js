let i = 0;
let intervalo = setInterval(function() {
  console.log('Hola baby')
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 500)

setImmediate(function() {
  console.log('Hola mi amor');
})