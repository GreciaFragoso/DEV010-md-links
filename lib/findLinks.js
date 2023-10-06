const jsdom = require('jsdom');
const { JSDOM } = jsdom; // desestructura el objeto JSDOM de jsdom
const { readAFile } = require('./readFile');
const { requestHTTP } = require('./requestHTTP');
// const { readADirectory, readAllFiles } = require('./readADirectory');

const findLinks = (usersPath, validate) => {
    return readAFile(usersPath)
    // return readAllFiles(usersPath)
        .then((dataHTML) => {
            const dom = new JSDOM(dataHTML);
            const links = dom.window.document.querySelectorAll('a');
            if(links.length === 0) {
                console.log('There are not links at', usersPath);
                return; // para eliminar el array vacío de la consola
            }

            const linksPromises = Array.from(links).map((link) => {
                const linkInfo = {
                    href: link.href,
                    text: link.textContent,
                    file: usersPath,
                };
                // return linkInfo;
                if (validate === true) {
                    return requestHTTP(link).then((result) => {
                        linkInfo.Status = result.Status;
                        linkInfo.Message = result.message;
                        return linkInfo;
                    }) 
                    .catch(error => {
                        console.log(error);
                        return linkInfo;
                    })
                }
                // console.log('Links for: ', usersPath)
                return linkInfo
            })

            const validatedLinks = Promise.all(linksPromises)
            return validatedLinks.then(( result )=> {
                console.log(result)
                return result;
            }).catch(error => {
                console.log(error);
                return result;
            })
        })
        .catch(error => {
            console.log(error);
            throw error;
        })
}

module.exports = {
    findLinks,
}
