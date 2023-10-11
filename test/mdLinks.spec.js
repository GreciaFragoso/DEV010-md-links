const fs = require('fs');
const { mdLinks } = require('../lib/mdLinks');
const { readAllFiles } = require('../lib/readADirectory');
const { findLinks } = require('../lib/findLinks');
// const { readFile } = require('./readFile');
// const { validatePath } = require('./validatePath');

describe('mdLinks', () => {
  it('Should read all files if path is directory', () => {
    const usersPath = './pruebas';
    const validate = true;
    const allFilesMock = readAllFiles(usersPath);
    const mockForEach = jest.fn();
    const stats = { isDirectory: jest.fn().mockReturnValue(true) };
    const statSpy = jest.spyOn(fs, 'stat');
    statSpy.mockImplementation((path, callback) => {
          callback(null, stats);
    })
    
    jest.spyOn(allFilesMock, 'forEach').mockImplementation(mockForEach);
    const myPromise = mdLinks(usersPath, validate);

    return myPromise.then(result => {
      expect(typeof result).toBe('object');
      expect(allFilesMock.length).toBe(3);
      statSpy.mockRestore();
    })
    // expect(allFilesMock.length).toBe(3);
    // statSpy.mockRestore();

    // allFilesMock.mockRestore();
  })

  // it('Should read a directory', () => {
  //   const directoryMock = './pruebas';
  //   const stats = { isDirectory: jest.fn().mockReturnValue(true) };

  //   jest.spyOn(fs, 'stat').mockImplementation((path, callback) => {
  //     callback(null, stats);
  //   })
  //   // const directoryAbsoluteMock = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\pruebas';
  //   const readAllFiles = jest.fn();
  //   const myPromise = mdLinks(directoryMock, readAllFiles);

  //   return myPromise.then(result => {
  //     expect(typeof result).toBe('object');
  //   });
  // })

  it('Resolve promise ', () => {
    const usersPath = './pruebas/prueba1.md';
    const userAbsolutePath = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\README.md';
    const validatePath = jest.fn().mockReturnValue(userAbsolutePath);
    const readAFile = jest.fn().mockReturnValue(true);
    const myPromise = mdLinks(usersPath, validatePath, readAFile);
    return myPromise.then(result => {
      expect(typeof result).toBe('object');
    })

  });
  it('Reject promise', () => {
    const usersPath = './prueba.txt';
    const validatePath = jest.fn().mockReturnValue(true);
    const readFile = jest.fn().mockReturnValue(true);
    const myPromise = mdLinks(usersPath, validatePath, readFile);
    const error = new Error('Your file is not allowed');
    // const array = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
    // const mockForIncludes = jest.fn().mockReturnValue(false);
    // array.prototype.includes = mockForIncludes
    // array.prototype.includes = jest.fn().mockReturnValue(false);
    return myPromise.catch(result => {
      // expect(result).toBe(error);
      expect(result).toStrictEqual(error);
    })
  })

});
