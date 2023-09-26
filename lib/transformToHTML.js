const marked = require('marked');

const transformToHTML = (dataMD) => {
    const dataHTML = marked.parse(dataMD);
    console.log('HTML file: ', dataHTML);
    return dataHTML;
};

module.exports = {
    transformToHTML,
}