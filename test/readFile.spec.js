const { readAFile } = require('../lib/readFile');
const fs = require('fs');
// const { transformToHTML } = require('../lib/transformToHTML');
// const { transformToHTML } = require('../lib/transformToHTML');

// global.console = { log: jest.fn() };

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
// it('Should read a file', async () => {
//     const usersPath = './prueba.md'
//     const mockFileContent = 'This is a test';
//     jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
//         callback(null, mockFileContent)
//     })

//     jest.spyOn(global, 'transformToHTML').mockReturnValue('HTML content') // mock transformToHTML
//     const result = await readAFile(usersPath); //llamamos a la función
//     expect(result).toBe('ContenidoHTML');
//     expect(fs.readFile).toHaveBeenCalled();
//     // expect(transformToHTML).toHaveBeenCalled();
// })

// it('Should read a file', () => {
//     const usersPath = './README.md';
//     const mockFileContent = 'This is a test';
//     const transformToHTML = jest.fn().mockReturnValue('HTML content');
//     // mock de fs.readFile (la espiamos)
//     // jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
//     //     callback(null, mockFileContent);
//     // })
//     jest.spyOn(fs, 'readFile').mockResolvedValue(mockFileContent);
//     const myPromise = readAFile(usersPath, transformToHTML);
//     // await myPromise;
//     // expect(fs.readFile).toHaveBeenCalled();
//     // expect(transformToHTML).toHaveBeenCalled();
//     return myPromise.then(() => {
//         // expect(result).toBe('HTML content');
//         expect(fs.readFile).toHaveBeenCalled();
//         expect(transformToHTML).toHaveBeenCalled();
//     })

    // await readAFile(usersPath);

    //expect(console.log).toHaveBeenCalledWith('File content: ', mockFileContent);
// }, 20000)

// it('Should throw error', async () => {
//     // jest.setTimeout(20000);
//     const usersPath = './README';
//     // const mockFileContent = 'This is a fail test';
//     const errorMessage = 'Error reading file';
//     const consoleErrorSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
//     // mock de fs.readFile (la espiamos)
//     //jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
//     //    callback(new Error(errorMessage));
//     //})
//     jest.spyOn(fs, 'readFile').mockResolvedValue(new Error(errorMessage));

//     await readAFile(usersPath);
//     // try {
//     //     await readAFile(usersPath);
//     // } catch (error) {
//     //     // expect(error.message).toBe('console.error is not a function');
//     // }
//     // // await readAFile(usersPath);

//     expect(consoleErrorSpy).toHaveBeenCalledWith('Something went wrong: ', new Error(errorMessage));
//     consoleErrorSpy.mockRestore();
//     // const myFunction = readAFile(usersPath)
//     // fs.readFile = jest.fn().mockReturnValue(error);
//     // expect(readFile).toBe(error);
// })