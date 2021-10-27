
process.on('exit', () => {
  console.log('El proceso acabo');
  setTimeout(() => {
    console.log('esto no se va a ejecutar')
  }, 0)
  })

process.on('beforeExit', () => {
  console.log('El proceso casi termina');
})

process.on('uncaughtException', (err, origin) => {
  console.error('Vaya se nos ha olvidado capturar un error');
  // console.error(err);
});