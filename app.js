const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require('colors');

console.clear();
console.log(argv);
console.log("base: yargs", argv.b);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, colors.green('creado')))
  .catch((err) => console.log(err));
