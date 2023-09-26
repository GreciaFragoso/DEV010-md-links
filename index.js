// module.exports = () => {
//   // aquí va mi función mdLinks
// }

// const path = require('node:path');
const { mdLinks } = require('./lib/mdLinks')
// const fs = require('fs');
 
console.log('Index executing');

mdLinks('./prueba.txt')
  .then(() => {
    console.log('Promise ok')
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

 module.exports = () => mdLinks;
