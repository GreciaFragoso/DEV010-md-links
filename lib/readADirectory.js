const fs = require('fs');
// const path = require('path');
const { validatePath } = require('./validatePath');

const readADirectory = (userDirectory) => {
    const directoryAbsolutePath = validatePath(userDirectory);
    const files = fs.readdirSync(directoryAbsolutePath);
    console.log(files);
    return files;
}

module.exports = {
    readADirectory
}