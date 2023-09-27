const path = require('path');

const transformPath = (usersPath) => {
    const userAbsolutePath = path.resolve(usersPath);
    // console.log('Path has been transformed into absolute');
    // return absolutePath;
    console.log('Path has been transformed into absolute')
    return userAbsolutePath;
}

module.exports = {
    transformPath,
}