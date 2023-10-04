const fs = require('fs');
const { transformToHTML } = require('./transformToHTML');

const readAFile = (usersPath) => {
    // fs.readFile(usersPath, 'utf8', (error, data) => {
    //     if (error) {
    //         console.log('Something went wrong: ', error);
    //         return;
    //         // return error;
    //     }
    //     console.log('File content: ', data);
    //     const dataHTML = transformToHTML(data);
    //     return dataHTML;
    // })
     return new Promise((resolve, reject) => {
        fs.readFile(usersPath, 'utf8', (error, data) => {
            if (error) {
              console.log('Something went wrong: ', error);
              reject(error);
              return;
            }
            // console.log('File content: ', data);
            const dataHTML = transformToHTML(data);
            resolve(dataHTML);
            // return dataHTML;
        })
    })
}

module.exports = {
    readAFile,
}