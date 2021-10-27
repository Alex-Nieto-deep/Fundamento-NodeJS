let nombre = process.env.NOMBRE || 'Alex';
let web = process.env.WEB || 'No tengo pagina web';

console.log('Hola ' + nombre);
console.log('Mi pagina es: ' + web);