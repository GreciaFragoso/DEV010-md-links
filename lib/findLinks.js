const jsdom = require('jsdom');
const { JSDOM } = jsdom; // desestructura el objeto JSDOM de jsdom
// const fs = require('fs');
const { readAFile } = require('./readFile');

const findLinks = (usersPath) => {
    return readAFile(usersPath)
        .then((dataHTML) => {
            const dom = new JSDOM(dataHTML);
            const links = dom.window.document.querySelectorAll('a');
            links.forEach(link => {
                    console.log(link.href)
                });
            return links;
        })
        .catch((error) => {
            console.log('Something went wrong: ', error);
            throw error;
        })
    // const dataHTML = readAFile(usersPath);
    // const dom = new JSDOM(dataHTML); // se creanuevo objeto JSDOM con el contenido de mi archivo transformado a HTML
    // const links = dom.window.document.querySelectorAll('a'); // se seleccionan todos los links del doc
    // links.forEach(link => {
    //     console.log(link.href)
    // });
    // return links;
}

module.exports = {
    findLinks,
}
