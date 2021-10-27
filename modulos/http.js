const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  console.log('nueva peticion');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      let saludo = hola();
      res.write(saludo);
      res.end();
      break;
    default:
      res.write('Error 404 estas en el lugar equivocado')
      res.end();
  }

  // res.writeHead(201, { 'Content-Type': 'text/plain' });

  // // escribir respuesta al usuario
  // res.write('Hola, ya se usar HTTP de Node.Js')
  // res.end();
}


console.log('Escuchando HTTP en el puerto 3000')

function hola() {
  return 'hola que tal'
}