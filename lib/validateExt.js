const path = require('path');

const validateExt = (userPath) => {
    const mdExtentions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
    const fileExt = path.extname(userPath);
    console.log('The file ext is ' + fileExt);
    if (mdExtentions.includes(fileExt)) {
        console.log('Your file is allowed');
    } else {
        console.log('Your file is not allowed');
    }
}

module.exports = {
    validateExt,
}
