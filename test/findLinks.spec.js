const { findLinks } = require('../lib/findLinks');

describe('Find links', () => {
    it('Should return prueba.md stats', () => {
        const usersPath = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\prueba.md';
        const consoleSpy = jest.spyOn(console, 'log');

        return findLinks(usersPath).then(links => {
            expect(consoleSpy).toHaveBeenCalled();
            expect(links.length).toBe(3);
            consoleSpy.mockRestore();
        })
    })
})