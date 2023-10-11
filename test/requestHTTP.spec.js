const { requestHTTP } = require('../lib/requestHTTP');
const fetch = require('isomorphic-fetch');

// fetchMock.enableMocks();

describe('requestHTTP', () => {
    let originalFetch;
  
    beforeAll(() => {
      originalFetch = global.fetch;
    });
  
    afterAll(() => {
      global.fetch = originalFetch;
    });
  
    it('Debería devolver un objeto con mensaje "Ok" si la respuesta es exitosa', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        status: 200,
        // json: jest.fn().mockResolvedValueOnce({})
      });
  
      const result = await requestHTTP('https://www.youtube.com/watch?v=HgqNstf4xg0');
  
      expect(result).toEqual({ Status: 200, message: 'Ok' });
    });
  
    it('Debería devolver un objeto con mensaje "Fail" si la respuesta no es exitosa', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        status: 429,
        // json: jest.fn().mockResolvedValueOnce({})
      });
  
      const result = await requestHTTP('https://www.linkedin.com/in/grecia-naomi-fragoso-mart%C3%ADnez-513655138/');
  
      expect(result).toEqual({ Status: 999, message: 'Fail' }); // a veces el status da 429
    });
  
    it('Debería devolver un objeto con mensaje "Fail" si hay un error en la solicitud', () => {
        // const mockResult = new Error();
        global.fetch = jest.fn().mockRejectedValueOnce({
            ok: false,
            status: undefined,
            // json: jest.fn().mockRejectedValueOnce(new Error())
          });
        // global.fetch = jest.fn().mockRejectedValueOnce(mockResult);

        // const myPromise = await requestHTTP('https://example.com');

        return requestHTTP('https://example.com').catch(result => {
            expect(typeof result).toBe('object');
            expect(result).toEqual({ Status: undefined, message: 'Fail' });
        })
        // const result = await requestHTTP('https://example.com');
        // expect(typeof result).toBe('object');
        // expect(result).toEqual({ Status: undefined, message: 'Fail' });
    });
  });

// describe('Request HTTP', () => {
//     it('Should return a fail HTTP response status', () => {
//         global.fetch = jest.fn().mockResolvedValueOnce({
//             ok: false,
//             status: 404,
//             json: jest.fn().mockResolvedValueOnce({})
//           });
      
//           const myPromise = requestHTTP('https://exampletest.com');

//           return myPromise.then(result => {
//             expect(result).toBe({ Status: 404, message: 'Fail' });

//           })
      
//           //expect(result).toEqual({ Status: 404, message: 'Fail' });
//         // const mockResult = {ok: false, Status: 999,
//         // message: 'Fail',}
//         // const fetchSpy = jest.spyOn(global, 'fetch');
//         // // const requestHTTP = jest.spyOn(global, 'fetch').mockResolvedValue(mockResult);
//         // fetchSpy.mockResolvedValue(mockResult);
//         // return requestHTTP('https://www.youtube.com/watch?v=HgqNstf4xg0').then(result => {
//         //     // expect(result).toEqual(mockResult);
//         //     expect(result).toBe(fetchSpy);
//         //     fetchSpy.mockRestore();
//         // })
//     }, 9000)

//     it('Should return ok if there is HTTP response', async () => {
//         global.fetch = jest.fn().mockResolvedValueOnce({
//             ok: true,
//             status: 200,
//             json: jest.fn().mockResolvedValueOnce({})
//           });
      
//           const result = await requestHTTP('https://example.com');
      
//           expect(result).toEqual({ Status: 200, message: 'Ok' });
//         // const mockResult = {Status: 200,
//         // message: 'Ok',}
//         // const requestHTTP = jest.spyOn(global, 'fetch').mockResolvedValue(mockResult);

//         // return requestHTTP('https://www.youtube.com/watch?v=HgqNstf4xg0').then(result => {
//         //     expect(result).toEqual(mockResult);
//         // })
//     })

//     it('Should reject promise', () => {
//         const error = {};
//         error.Status = 500;
//         error.message = 'Fail'
//         const mockResult = {Status: 500, message: 'Fail'};
//         const requestHTTP = jest.spyOn(global, 'fetch').mockRejectedValue(error);

//         return requestHTTP('https://example.test.com').catch(error => {
//             expect(error).toEqual(mockResult);
//         })
//     })
// })