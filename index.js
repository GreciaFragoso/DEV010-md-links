const { mdLinks } = require('./lib/mdLinks')
// const { findLinks } = require('./lib/findLinks');
 
// console.log('Index executing');
const userPath = './prueba.md';
const validate = true;


mdLinks(userPath, validate)
  .then((result) => {
    // console.log(result)
    // const userAbsolutePath = mdLinks(userPath)
    console.log(result);
    // transformToHTML();
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

 module.exports = () => mdLinks;
