const { mdLinks } = require('../lib/mdLinks');
// const { readFile } = require('./readFile');
// const { validatePath } = require('./validatePath');

describe('mdLinks', () => {

  it('Resolve promise ', () => {
    const usersPath = './README.md';
    const validatePath = jest.fn().mockReturnValue(true);
    const readAFile = jest.fn().mockReturnValue(true);
    const myPromise = mdLinks(usersPath, validatePath, readAFile);
    return myPromise.then(result => {
      expect(result).toBe('Your file is allowed');
    })

  });
  it('Reject promise', () => {
    const usersPath = './prueba.txt';
    const validatePath = jest.fn().mockReturnValue(true);
    const readFile = jest.fn().mockReturnValue(true);
    const myPromise = mdLinks(usersPath, validatePath, readFile);
    // const array = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
    // const mockForIncludes = jest.fn().mockReturnValue(false);
    // array.prototype.includes = mockForIncludes
    // array.prototype.includes = jest.fn().mockReturnValue(false);
    return myPromise.catch(result => {
      expect(result).toBe('Your file is not allowed');
    })
  })

});
