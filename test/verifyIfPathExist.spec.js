const { verifyIfPathExist } = require('../lib/verifyIfPathExist');

describe('Verify if path exist', () => {
    it('Should access an existing path', async () => {
        const usersPath = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\prueba.md';
        const consoleSpy = jest.spyOn(console, 'log');


        await verifyIfPathExist(usersPath);

        expect(consoleSpy).toHaveBeenCalledWith('The file/path exist');
        consoleSpy.mockRestore();
    })
    it('Should reject promise for a not existing path', () => {
        const usersPath = 'C:\\Users\\Grecia\\Desktop\\Curso Python\\Bootcamp Laboratoria\\MD - Links\\DEV010-md-links\\pruebafake.md';
        const consoleSpy = jest.spyOn(console, 'log');

        return verifyIfPathExist(usersPath).catch((error) => {
            expect(error).toBeDefined();
            expect(consoleSpy).toHaveBeenCalledWith('The file/path does not exist: ', error);
        }).finally(() => {
            consoleSpy.mockRestore();
        });
        // const myPromise = verifyIfPathExist(usersPath);
        // const error = new Error();

        // myPromise.catch((result) => {
        //     expect(result).toBe(error);
        //     expect(consoleSpy).toHaveBeenCalledWith('The file/path does not exist: ', error);
        // })
        
        // consoleSpy.mockRestore();
    })
})