const { requestHTTP } = require('../lib/requestHTTP');
const fetch = require('isomorphic-fetch');


describe('Request HTTP', () => {
    it('Should return fail if there is not HTTP response', () => {
        const mockResult = {Status: 999,
        message: 'Fail',}
        const requestHTTP = jest.spyOn(global, 'fetch').mockResolvedValue(mockResult);

        return requestHTTP('https://www.youtube.com/watch?v=HgqNstf4xg0').then(result => {
            expect(result).toEqual(mockResult);
        })
    })

    it('Should return ok if there is HTTP response', () => {
        const mockResult = {Status: 200,
        message: 'Ok',}
        const requestHTTP = jest.spyOn(global, 'fetch').mockResolvedValue(mockResult);

        return requestHTTP('https://www.youtube.com/watch?v=HgqNstf4xg0').then(result => {
            expect(result).toEqual(mockResult);
        })
    })

    it('Should reject promise', () => {
        const error = {};
        error.Status = 500;
        error.message = 'Fail'
        // global.fetch = jest.fn().mockRejectedValue(new Error('Fetch error'));
        // global.fetch = jest.fn().mockResolvedValueOnce({ ok: false });
        const mockResult = {Status: 500, message: 'Fail'};
        const requestHTTP = jest.spyOn(global, 'fetch').mockRejectedValue(error);

        return requestHTTP('https://example.test.com').catch(error => {
            expect(error).toEqual(mockResult);
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