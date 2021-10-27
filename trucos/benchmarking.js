let suma = 0;

console.time('bucle')

for (let i = 0; i < 1000000000; i++) {
  suma ++;
}

console.timeEnd('bucle')

let suma2 = 0;

console.time('bucle 2')

for (let j = 0; j < 1000000000; j++) {
  suma2 = suma2 + j;
}

console.timeEnd('bucle 2')

console.time('asincrona');
console.log('comienza el processo asincrono')
asincrona()
  .then(() => {
    console.timeEnd('asincrona');
  })

function asincrona() {
  return new Promise( (resolve) => {
    setTimeout(() => {
      console.log('Terminando el processo asincrona');
      resolve();
    })
  })
}