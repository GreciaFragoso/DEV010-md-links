const fs = require('fs');

const readAFile = (usersPath) => {
    fs.readFile(usersPath, 'utf8', (error, data) => {
        if (error) {
            console.log('Something went wrong: ', error);
            return;
            // return error;
        }

        console.log('File content: ', data);
        return data;
    })
    //  return new Promise((resolve, reject) => {
    //     fs.readFile(usersPath, 'utf8', (error, data) => {
    //         if (error) {
    //           reject('Something went wrong: ', error);
    //         }

    //         resolve('File content:', data);
    //     })
    // })
}

module.exports = {
    readAFile,
}