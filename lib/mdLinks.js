const path = require('node:path');
// const fs = require('fs');
const { readFile } = require('./readFile');
const { validatePath } = require('./validatePath');
// const { validateExt } = require('./validateExt');
// const mdLinks = require("md-links");

const mdLinks = (usersPath) => 
  new Promise((resolve, reject) => {
    console.log('Reading');
    validatePath(usersPath);
    readFile(usersPath);
    const mdExtentions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
    const fileExt = path.extname(usersPath);
    console.log('The file ext is ' + fileExt);
    if (mdExtentions.includes(fileExt)) {
        resolve('Your file is allowed');
    } else {
        reject('Your file is not allowed');
    };
  });

// mdLinks
// .then(links => {
//   console.log('Dentro de la promesa')
// //=> [{ href, text, file }, ...]
// })
// .catch(console.error);

  // module.exports = () => {
  //   fs.readFile()
  //   // aquí va mi función mdLinks
  // }

module.exports = {
  mdLinks,
}