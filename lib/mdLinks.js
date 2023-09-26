const path = require('node:path');
// const fs = require('fs');
const { readAFile } = require('./readFile');
const { validatePath } = require('./validatePath');
// const { validateExt } = require('./validateExt');
// const mdLinks = require("md-links");

const mdLinks = (usersPath) => 
  new Promise((resolve, reject) => {
    // console.log('Reading');
    validatePath(usersPath);
    // readAFile(usersPath);
    const mdExtentions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
    const fileExt = path.extname(usersPath);
    // console.log('The file ext is ' + fileExt);
    if (mdExtentions.includes(fileExt)) {
        resolve('Your file is allowed');
        readAFile(usersPath);
    } else {
        reject('Your file is not allowed');
    }
  });

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

module.exports = {
  mdLinks,
}