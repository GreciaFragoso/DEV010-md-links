const jsdom = require('jsdom');
const { JSDOM } = jsdom; // desestructura el objeto JSDOM de jsdom
const { readAFile } = require('./readFile');
const { requestHTTP } = require('./requestHTTP');

const findLinks = (usersPath, validate) => {
    return readAFile(usersPath)
        .then((dataHTML) => {
            const dom = new JSDOM(dataHTML);
            const links = dom.window.document.querySelectorAll('a');
            if (links.length === 0) {
                console.log('There are not links')
            }
            if (validate === false) {
                links.forEach(link => {
                    // fetch(link).then(response => response.json())
                    //     .then(respond)
                        console.log(
                            {href: link.href,
                            text: link.textContent,
                            file: usersPath, }
                            )
                    });
            } else {
                links.forEach(link => {
                    requestHTTP(link).then(resultado => { 
                        console.log(
                            {href: link.href,
                            text: link.textContent,
                            file: usersPath, 
                            Status: resultado.Status,
                            Message: resultado.message,
                            }
                        )
                    }).catch(error => {console.log(error)});
                    // console.log(
                    //     {href: link.href,
                    //     text: link.textContent,
                    //     file: usersPath, 
                    //     HTTP: linkResponse,
                    //     }
                    // )
                })
            }
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
