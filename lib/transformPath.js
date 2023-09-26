const path = require('path');

const transformPath = (usersPath) => {
    path.resolve(usersPath);
    // console.log('Path has been transformed into absolute');
    // return absolutePath;
    // console.log('Path has been transformed into absolute')
    return 'Path has been transformed into absolute';
}

module.exports = {
    transformPath,
}