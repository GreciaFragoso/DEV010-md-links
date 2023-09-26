// module.exports = () => {
//   // aquí va mi función mdLinks
// }

// const path = require('node:path');
const { mdLinks } = require('./lib/mdLinks')
// const { transformToHTML } = require('./lib/transformToHTML');
// const fs = require('fs');
const { findLinks } = require('./lib/findLinks');
 
// console.log('Index executing');

mdLinks('./prueba.md')
  .then(() => {
    console.log('Promise ok')
    findLinks('./prueba.md')
    // transformToHTML();
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

 module.exports = () => mdLinks;
