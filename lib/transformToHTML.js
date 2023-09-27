const marked = require('marked');

const transformToHTML = (data) => {
    const dataHTML = marked.parse(data);
    console.log('HTML file: ', dataHTML);
    return dataHTML;
};

module.exports = {
    transformToHTML,
}
