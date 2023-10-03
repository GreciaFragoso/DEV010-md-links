const { mdLinks } = require('./lib/mdLinks');
const { readADirectory } = require('./lib/readADirectory');
// const path = require('path');
// const { findLinks } = require('./lib/findLinks');
 
// console.log(path.);
const userPath = './prueba.md';
const validate = true;
// const userDirectory = 'C:\\Users\\Grecia\\Desktop\\Curso\ Python\\Bootcamp\ Laboratoria\\MD\ -\ Links\\DEV010-md-links\\pruebas'
// const userDirectory = 'C:\Users\Grecia\Desktop\Curso Python\Bootcamp Laboratoria\MD - Links\DEV010-md-links\pruebas'
const userDirectory = './pruebas'

readADirectory(userDirectory);
mdLinks(userPath, validate)
  .then((result) => {
    // console.log(result)
    // const userAbsolutePath = mdLinks(userPath)
    console.log(result);
    // readADirectory(userDirectory)
    // transformToHTML();
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

 module.exports = () => mdLinks;
