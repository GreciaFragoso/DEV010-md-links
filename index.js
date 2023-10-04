const { mdLinks } = require('./lib/mdLinks');
// const { readAllFiles } = require('./lib/readADirectory');

// const userPath = './prueba.md';
const userPath = './pruebas';
const validate = true;
// const userDirectory = './pruebas'
 
// readAllFiles(userDirectory);
mdLinks(userPath, validate)
  .then((result) => {
    // console.log(result); este console.log daba undefined
  })
  .catch(console.error);

 module.exports = () => mdLinks;
