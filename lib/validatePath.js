const path = require('node:path');
const { transformPath } = require('./transformPath');
const { verifyIfPathExist } = require('./verifyIfPathExist');

const validatePath = (usersPath) => {
    if (path.isAbsolute(usersPath)) {
        // console.log('The path ${usersPath} is absolute');
        verifyIfPathExist(usersPath);
        return 'The path is absolute';
    } else {
        const userAbsolutePath = transformPath(usersPath);
        verifyIfPathExist(userAbsolutePath);
        return userAbsolutePath;
    }
    // console.log(usersPath)
    // return userAbsolutePath;
}

module.exports = {
    validatePath,
};
