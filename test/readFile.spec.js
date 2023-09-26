const { readAFile } = require('../lib/readFile');
const fs = require('fs');

global.console = { log: jest.fn() };

describe('readFile', () => {
    it('Should read a file', async () => {
        const usersPath = './README.md';
        const mockFileContent = 'This is a test';

        // mock de fs.readFile (la espiamos)
        jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
            callback(null, mockFileContent);
        })

        await readAFile(usersPath);

        expect(console.log).toHaveBeenCalledWith('File content: ', mockFileContent);
        // const myFunction = readAFile(usersPath)
        // fs.readFile = jest.fn().mockReturnValue(error);
        // expect(readFile).toBe(error);
    })

    it('Should throw error', async () => {
        const usersPath = './README';
        // const mockFileContent = 'This is a fail test';
        const errorMessage = 'Error reading file';
        const consoleErrorSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        // mock de fs.readFile (la espiamos)
        jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
            callback(new Error(errorMessage));
        })

        readAFile(usersPath);
        // try {
        //     await readAFile(usersPath);
        // } catch (error) {
        //     // expect(error.message).toBe('console.error is not a function');
        // }
        // // await readAFile(usersPath);

        expect(consoleErrorSpy).toHaveBeenCalledWith('Something went wrong: ', new Error(errorMessage));
        consoleErrorSpy.mockRestore();
        // const myFunction = readAFile(usersPath)
        // fs.readFile = jest.fn().mockReturnValue(error);
        // expect(readFile).toBe(error);
    })
})