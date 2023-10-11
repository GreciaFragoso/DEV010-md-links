#!/usr/bin/env node
// convierte este archivo en un script de comandos de línea

const { mdLinks } = require('./lib/mdLinks');
const colors = require('colors');

const [,, ...args] = process.argv;
const userPath = args[0]
const validate = args.includes('--validate');
const stats = args.includes('--stats');

if (!userPath) { //si no se ingresa ruta para validación
    console.error('Please, introduce a valid path');
    process.exit(1);
}

if (validate && stats) {
    mdLinks(userPath, true).then(links => {
        const validLinks = links.filter(link => link.Message === 'Ok');
        let hrefValidLinks = validLinks.map(link => link.href);
        const brokenLinks = links.filter(link => link.Message === 'Fail')
        let hrefBrokenLinks = brokenLinks.map(link => link.href)
        const totalLinks = links.length; 
        console.log(colors.bold('Valid links: '), colors.green(hrefValidLinks));
        if (hrefBrokenLinks.length === 0) {
            hrefBrokenLinks = 0;
        }
        if (hrefValidLinks.length === 0) {
            hrefBrokenLinks = 0;
        }
        console.log(colors.bold('Broken links: '), colors.red(hrefBrokenLinks));
        console.log(colors.bold('Total links: '), colors.magenta(totalLinks));
        return;
    })
    .catch(error => {
        console.error(error);
    });
} else if (validate) {
    mdLinks(userPath, true).then(result => {
        return result;
    })
    .catch(error => {
        console.error(error);
    });
} else if (!validate) {
    mdLinks(userPath, false).then(result => {
        return result;
    })
    .catch(error => {
        console.error(error);
    });
}

