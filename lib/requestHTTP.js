const fetch = require('isomorphic-fetch');

const requestHTTP = (link) => {
    // let linkResponse = {};
    return fetch(link)
    .then(response => {
        if(!response.ok) { // consulta, si no hay respuesta, manda fail
            return {Status: response.status,
            message: 'Fail' }
            //return linkResponse;
        } else { // si hay respuesta, manda ok
            return {Status: response.status,
                message: 'Ok' }
        }
    })

    .catch(error => { // si hay error en la solicitud
        return {Status: error.status,
            message: 'Fail' }
    })
}

module.exports = {
    requestHTTP,
}