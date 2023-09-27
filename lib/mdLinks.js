const path = require('node:path');
const { validatePath } = require('./validatePath');

const mdLinks = (usersPath) => 
  new Promise((resolve, reject) => {
    // console.log('Reading');
    const userAbsolutePath = validatePath(usersPath);
    // readAFile(usersPath);
    const mdExtentions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
    const fileExt = path.extname(userAbsolutePath);
    // console.log('The file ext is ' + fileExt);
    if (mdExtentions.includes(fileExt)) {
        // resolve('Your file is allowed');
        resolve(userAbsolutePath);
        // return userAbsolutePath;
        // readAFile(usersPath);
        // findLinks(usersPath);
    } else {
        reject(new Error('Your file is not allowed'));
    }
    // return userAbsolutePath;
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