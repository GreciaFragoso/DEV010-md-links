const { validatePath } = require('../lib/validatePath');

describe('Validate path', () => {
    it('Should read an absolute route', () => {
        const path = require('path');
        const mockForAbsolutePath = jest.spyOn(path, 'isAbsolute').mockReturnValue(true);
        const usersPath = 'C:\Users\Grecia\Desktop\Curso Python\Bootcamp Laboratoria\MD - Links\DEV010-md-links\README.md';
        const result = validatePath(usersPath);
        expect(result).toBe('The path is absolute');

        mockForAbsolutePath.mockRestore(); // restauramos el resultado del mock para no afectar otros tests
    })
})