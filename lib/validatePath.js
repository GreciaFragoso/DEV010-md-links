const path = require('node:path');
const { transformPath } = require('./transformPath');

const validatePath = (usersPath) => {
    if (path.isAbsolute(usersPath)) {
        // console.log('The path ${usersPath} is absolute');
        return 'The path is absolute';
    } else {
        const userAbsolutePath = transformPath(usersPath);
        return userAbsolutePath;
    }
    // console.log(usersPath)
    // return userAbsolutePath;
}

module.exports = {
    validatePath,
};
