const { readAFile } = require('../lib/readFile');
const fs = require('fs');

describe('readFile', () => {
    it('Should read a file', async () => {
        const usersPath = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\pruebatest.md';
        const mockFileContent = 'This is a test';
        jest.spyOn(fs, 'stat').mockImplementation((path, options, callback) => {
             callback(null, mockFileContent)
        })
        const transformToHTML = jest.fn().mockResolvedValue('<p>This is a test</p>');
        //const dataHTML = transformToHTML(data);
        const myPromise = readAFile(usersPath, transformToHTML);
        return myPromise.then((result) => {
            expect(result).toMatch('<p>This is a test</p>');
        })
    })
    it('Should reject the promise', () => {
        const usersPath = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\pruebatest.md';
        // const mockFileContent = 'This is a test';
        const error = new Error();
        // const consoleSpy = jest.spyOn(console, 'log');
        jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
             callback(error)
        })
        const myPromise = readAFile(usersPath);
        return myPromise.catch((result) => {
            // expect(consoleSpy).toHaveBeenCalledWith('Something went wrong', error);
            expect(result).toBe(error);
        })
    })
})