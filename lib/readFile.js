const fs = require('fs');

const readFile = (usersPath) => {
    fs.readFile(usersPath, 'utf8', (error,data) => {
        if (error) {
            // console.error('Something went wrong: ', error);
            // return;
            return error;
        }

        // console.log('File content: ', data);
    })
}

module.exports = {
    readFile,
}