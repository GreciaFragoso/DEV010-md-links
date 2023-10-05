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
    
    jest.spyOn(allFilesMock, 'forEach').mockImplementation(mockForEach);

    expect(allFilesMock.length).toBe(3);
  })

  // it('Validate stats', () => {
  //   const directoryMock = './pruebas';
  //   const validate = true;
  //   const mockStats = {
  //     isDirectory: jest.fn().mockReturnValue(true),
  //   }

  //   const mockStat = jest
  //   .spyOn(fs, 'stat')
  //   .mockImplementation((path, callback) => {
  //     callback(null,mockStats);
  //   })

  //   mdLinks(fileMock, validate)

  //   // const findLinks = jest.fn();
  //   // expect(findLinks).toHaveBeenCalledWith(fileMock, validate);
  //   expect(mockStat).toHaveBeenCalled();
  // })

  it('Resolve promise ', () => {
    const usersPath = './README.md';
    const userAbsolutePath = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\README.md';
    const validatePath = jest.fn().mockReturnValue(userAbsolutePath);
    const readAFile = jest.fn().mockReturnValue(true);
    const myPromise = mdLinks(usersPath, validatePath, readAFile);
    return myPromise.then(result => {
      expect(result).toBe('Directory scanned');
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
      expect(result).toStrictEqual(error);
    })
  })

});
