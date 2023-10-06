const path = require('node:path');
const fs = require('fs');
const { validatePath } = require('./validatePath');
const { findLinks } = require('./findLinks');
const { readADirectory, readAllFiles } = require('./readADirectory');

const mdLinks = (usersPath, validate) => 
  new Promise((resolve, reject) => {
    const userAbsolutePath = validatePath(usersPath);
    fs.stat(userAbsolutePath, (err, stats) => {
      // if (err) {
      //   console.log(err)
      //   return;
      // }

      if (stats.isDirectory()) {
        // console.log('Es un directorio');
        // readADirectory(userAbsolutePath);
        const allFiles = readAllFiles(userAbsolutePath);
        const mdExtentions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
        // const fileExt = path.extname(userAbsolutePath);
        allFiles.forEach(file => {
          const fileExt = path.extname(file);
          // console.log(fileExt)
          // findLinks(file, validate);
          if (mdExtentions.includes(fileExt)) {
            resolve(findLinks(file,validate));
            // resolve(userAbsolutePath);
            //resolve();
        }
        })
        return;
      } else {
        const mdExtentions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
        const fileExt = path.extname(userAbsolutePath);
        if (mdExtentions.includes(fileExt)) {
            resolve(findLinks(userAbsolutePath,validate));
            // resolve(userAbsolutePath);
            // resolve('Directory scanned');
        } else {
            reject(new Error('Your file is not allowed')); // esta línea corta si es un directorio
        }
        console.log('Is only a file');
        return;
      }
    })
  });

module.exports = {
  mdLinks,
}


// const mdLinks = (usersPath) => 
//   new Promise((resolve, reject) => {
//     // console.log('Reading');
//     validatePath(usersPath);
//     readFile(usersPath).then(() => {
//       const mdExtentions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
//       const fileExt = path.extname(usersPath);
//       // console.log('The file ext is ' + fileExt);
//       if (mdExtentions.includes(fileExt)) {
//         resolve('Your file is allowed');
//       } else {
//         reject('Your file is not allowed');
//       };
//     }).catch(console.error);
//   });