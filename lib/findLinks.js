const jsdom = require('jsdom');
const { JSDOM } = jsdom; // desestructura el objeto JSDOM de jsdom
const { readAFile } = require('./readFile');
const { requestHTTP } = require('./requestHTTP');

const findLinks = (usersPath, validate) => {
    return readAFile(usersPath)
        .then((dataHTML) => {
            const dom = new JSDOM(dataHTML);
            const links = dom.window.document.querySelectorAll('a');
            if(links.length === 0) {
                console.log('There are not links')
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
                    // requestHTTP(link).then((result) => {
                    //     linkInfo.Status = result.Status;
                    //     linkInfo.Message = result.message;
                    //     return linkInfo;
                    // }) 
                    // .catch(error => {
                    //     console.log(error);
                    //     return linkInfo;
                    // })
                    // return linkInfo
                    // return Promise.resolve(linkInfo);
                }
                return linkInfo
                // return Promise.resolve(linkInfo);
            })
            
            // return Promise.all(linksPromises);
            const validatedLinks = Promise.all(linksPromises)
            return validatedLinks.then(( result )=> {
                console.log(result)
            }).catch(error => {
                console.log(error);
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
