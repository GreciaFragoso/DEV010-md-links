const fs = require('fs');
const path = require('path');
// const { validatePath } = require('./validatePath');
const { readAFile } = require('./readFile');
// const { findLinks } = require('./findLinks');

const readADirectory = (userDirectory) => {
    // const directoryAbsolutePath = validatePath(userDirectory);
    const files = fs.readdirSync(userDirectory);
    console.log(files);
    return files;
}

const readAllFiles = (userDirectory) => {
    // const directoryAbsolutePath = validatePath(userDirectory);
    const files = readADirectory(userDirectory);
    const allFiles = [];
    files.forEach(file => {
        const completePath = path.join(userDirectory, file);
        allFiles.push(completePath);
    })
    console.log('Paths founded: ', allFiles);
    
    allFiles.forEach(file => {
        readAFile(file);
        // findLinks(file, true); error is not a function
    })
    return(allFiles);
}

module.exports = {
    readADirectory,
    readAllFiles
}