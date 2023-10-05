const fs = require('fs');
const { readADirectory } = require('../lib/readADirectory');
const { readAllFiles } = require('../lib/readADirectory');

describe('Read a directory function', () => {
    it('Should read a directory path', () => {
        const directoryPath = './pruebas'
        const files = ['prueba1.md', 'prueba2.md', 'prueba3.md'];
        jest.spyOn(fs, 'readdirSync').mockReturnValue(files);
        const result = readADirectory(directoryPath)
        expect(result).toBe(files);
    })

    it('Should read all files from given directory', () => {
        const usersPath = './pruebas'
        const files = [ 'prueba1.md', 'prueba2.md', 'prueba3.md'];
        const mockPaths = [ 'pruebas\\prueba1.md', 'pruebas\\prueba2.md', 'pruebas\\prueba3.md'];
        //const readADirectory = jest.fn().mockReturnValue(files)
        const mockForEach = jest.fn();
        const consoleSpy = jest.spyOn(console, 'log')
        jest.spyOn(files, 'forEach').mockImplementation(mockForEach);
        readAllFiles(usersPath);

        expect(consoleSpy).toHaveBeenCalledWith('Paths founded: ', mockPaths);
        // expect(mockForEach).toHaveBeenCalledTimes(3);
    })
})