// const { it } = require('node:test');
const { findLinks } = require('../lib/findLinks');

describe('Find links', () => {
    it('Should return prueba.md stats', () => {
        const usersPath = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\prueba.md';
        const consoleSpy = jest.spyOn(console, 'log');
        const validate = true;

        return findLinks(usersPath, validate).then(links => {
            expect(consoleSpy).toHaveBeenCalled();
            // expect(links.length).toBe(3);
            consoleSpy.mockRestore();
        })
    })
    
    it('Should return only links info href, text and file', () => {
        const usersPath = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\prueba.md';
        const consoleSpy = jest.spyOn(console, 'log');
        const validate = false;

        return findLinks(usersPath, validate).then(links => {
            expect(consoleSpy).toHaveBeenCalled();
            // expect(links.length).toBe(3);
            consoleSpy.mockRestore();
        })
    })

    it('Should return that there are not links', () => {
        const usersPath = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\pruebatest.md';
        const consoleSpy = jest.spyOn(console, 'log');

        return findLinks(usersPath).then(links => {
            expect(consoleSpy).toHaveBeenCalled();
            // expect(links.length).toBe(0);
            consoleSpy.mockRestore();
        })
    })

    it('Should return error for validate true', () => {
        const usersPath = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\pruebatest.md';
        const consoleSpy = jest.spyOn(console, 'log');

        return findLinks(usersPath).then().catch((error) => {
            expect(consoleSpy).toHaveBeenCalledWith(error);
            consoleSpy.mockRestore();
        })
    })

    it('Should return error', () => {
        const usersPath = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\pruebatest.md';
        const consoleSpy = jest.spyOn(console, 'log');

        return findLinks(usersPath).catch((error) => {
            expect(consoleSpy).toHaveBeenCalledWith('Something went wrong: ', error);
            consoleSpy.mockRestore();
        })
    })
})
