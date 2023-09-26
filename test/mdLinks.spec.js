const { mdLinks } = require('../lib/mdLinks');
// const { readFile } = require('./readFile');
// const { validatePath } = require('./validatePath');

describe('mdLinks', () => {

  it('Resolve promise ', () => {
    const usersPath = './README.md';
    const validatePath = jest.fn().mockReturnValue(true);
    const readFile = jest.fn().mockReturnValue(true);
    const myPromise = mdLinks(usersPath, validatePath, readFile);
    return myPromise.then(result => {
      expect(result).toBe('Your file is allowed');
      validatePath.mockRestore();
      readFile.mockRestore();
    })

  });
  it('Reject promise', () => {
    const usersPath = './prueba.txt';
    const validatePath = jest.fn().mockReturnValue(false);
    const readFile = jest.fn().mockReturnValue(true);
    const myPromise = mdLinks(usersPath, validatePath, readFile);
    return myPromise.then(result => {
      expect(result).toBe('Your file is not allowed');
    })
  })

});
