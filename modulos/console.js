function function1() {
  console.group('Funcion 1');
  console.log('Exto es de la funcion 1')
  console.log('Exto tambien de la funcion 1')
  function2();
  console.groupEnd('Funcion 1');
}

function function2() {
  console.group('Funcion 2');
  console.log('Esto es de la Funcion 2');
  console.groupEnd('Funcion 2');
}

console.log('Empezamos')
function1();