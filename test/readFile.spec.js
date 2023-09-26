const { readFile } = require('../lib/readFile');

describe('readFile', () => {
    it('Should read a file', () => {
        const usersPath = './README.md';
        const readFile = jest.fn();
        expect(readFile).toHaveBeenCalled();
    })
})