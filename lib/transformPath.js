const path = require('path');

const transformPath = (usersPath) => {
    const absolutePath = path.resolve(usersPath);
    console.log('Path has been transformed into absolute');
    return absolutePath;
}

module.exports = {
    transformPath,
}