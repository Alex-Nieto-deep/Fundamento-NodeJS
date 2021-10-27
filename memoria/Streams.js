const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStreams = fs.createReadStream(__dirname + '/input.txt')

readableStreams.setEncoding('utf8');

// readableStreams.on('data', function (chunk) {
//   data += chunk;
// })

// readableStreams.on('end', function() {
//   console.log(data);
// })

// process.stdout.write('Hola baby');
// process.stdout.write('como vas');

const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
  chunckMayus = chunk.toString().toUpperCase();
  this.push(chunckMayus);
  cb();
}

let mayus = new Mayus();

readableStreams
  .pipe(mayus)
  .pipe(process.stdout);