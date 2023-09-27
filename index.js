const { mdLinks } = require('./lib/mdLinks')
const { findLinks } = require('./lib/findLinks');
 
// console.log('Index executing');
const userPath = './prueba.md';


mdLinks(userPath)
  .then((result) => {
    // console.log(result)
    // const userAbsolutePath = mdLinks(userPath)
    findLinks(result);
    // transformToHTML();
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

 module.exports = () => mdLinks;
