// const { hasUncaughtExceptionCaptureCallback } = require('process');
const { requestHTTP } = require('../lib/requestHTTP');
const fetch = require('isomorphic-fetch');
// const { stringify } = require('querystring');

describe('Request HTTP', () => {
    it('Should return fail if there is not HTTP response', () => {
        const mockResult = {Status: 999,
        message: 'Fail',}
        // const response = false;

        const fetch = jest.spyOn(global, 'fetch').mockReturnValue(false);
        // const mockResponse = { json: jest.fn().mockResolvedValue(mockResult) };
        // const mockFetchPromise = Promise.resolve(mockResponse);

        // jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(mockResponse));
        const myPromise = requestHTTP(fetch);
        return myPromise('https://www.linkedin.com/in/grecia-naomi-fragoso-mart%C3%ADnez-513655138/').then(result => {
            expect(result).toEqual(mockResult);
        })
    })

    it('Should return ok if there is HTTP response', () => {
        const mockResult = {Status: 200,
        message: 'Ok',}

        const requestHTTP = jest.spyOn(global, 'fetch').mockResolvedValue(mockResult);
        // const mockResponse = { json: jest.fn().mockResolvedValue(mockResult) };
        // const mockFetchPromise = Promise.resolve(mockResponse);

        // jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(mockResponse));

        return requestHTTP('https://www.youtube.com/watch?v=HgqNstf4xg0').then(result => {
            expect(result).toEqual(mockResult);
        })
    })
})

    // it('Should return fail if there is not HTTP response', () => {
    //     const mockResponse = {
    //         ok: false,
    //         status: 404,
    //     };

    //     global.fetch = jest.fn(() => Promise.resolve({
    //         json: () => Promise.resolve(mockResponse),
    //     }));
    //     // fetch.mockResponseOnce(JSON, stringify(mockResponse));
    //     // const mockFetch = fetch.jest.fn(() => Promise.resolve(mockResponse));
    //     //const mockFetch = jest.spyOn(fetch, 'global').mockResolvedValue(mockResponse);
    //     // fetch = mockFetch;

    //     return requestHTTP('http://example.test.com').then(result => {
    //         expect(result).toEqual({Status: 404, message: 'Fail'});
    //     })
    // })