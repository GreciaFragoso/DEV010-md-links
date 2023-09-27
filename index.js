const { mdLinks } = require('./lib/mdLinks')
const { findLinks } = require('./lib/findLinks');
 
// console.log('Index executing');

mdLinks('./prueba.md')
  .then((result) => {
    console.log(result)
    findLinks('./prueba.md')
    // transformToHTML();
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

 module.exports = () => mdLinks;
