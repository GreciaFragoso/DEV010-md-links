const jsdom = require('jsdom');
const { JSDOM } = jsdom; // desestructura el objeto JSDOM de jsdom
const { readAFile } = require('./readFile');

const findLinks = (usersPath) => {
    return readAFile(usersPath)
        .then((dataHTML) => {
            const dom = new JSDOM(dataHTML);
            const links = dom.window.document.querySelectorAll('a');
            links.forEach(link => {
                    console.log(
                        {href: link.href,
                        text: link.textContent,
                        file: usersPath, }
                        )
                });
            return links;
        })
        .catch((error) => {
            console.log('Something went wrong: ', error);
            throw error;
        })
}

module.exports = {
    findLinks,
}
