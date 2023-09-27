const { validateExt } = require('../lib/validateExt');
// const path = require('path');

describe('ValidateExt', () => {
    it('Verify an MD file', () => {
        // const mdExtentions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
        const testFile = 'test.md';

        const consoleSpy = jest.spyOn(console, 'log');
        validateExt(testFile);

        expect(consoleSpy).toHaveBeenCalledWith('Your file is allowed');
        consoleSpy.mockRestore();
    })
    it('Reject a file txt', () => {
        // const mdExtentions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
        const testFile = 'test.txt';

        const consoleSpy = jest.spyOn(console, 'log');
        validateExt(testFile);

        expect(consoleSpy).toHaveBeenCalledWith('Your file is not allowed');
        consoleSpy.mockRestore();
    })
})