const fs = require('fs');

const verifyIfPathExist = (usersPath) => {
    return new Promise((resolve, reject) => {
        fs.access(usersPath, fs.constants.F_OK, (error) => {
            if (error) {
              console.log('The file/path does not exist: ', error);
              reject(error);
              // return;
            }
            console.log('The file/path exist');
            resolve();
          });
    })
}

module.exports = {
    verifyIfPathExist
}