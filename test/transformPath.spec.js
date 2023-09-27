const { transformPath } = require('../lib/transformPath');
// const path = require('path');

// jest.mock('path', () => ({
//     ...jest.requireActual('path'),
//     resolve: jest.fn(() => '/test/route')
// }))

let consoleLogOutput = [];
const originalConsoleLog = console.log;
console.log = (message) => {
  consoleLogOutput.push(message);
};

describe('TransformPath', () => {
    it('Should transform a route into absolute', () => {
        const relativePath = 'route/to/be/transformed'
        //const absolutePath = path.resolve('directory', 'file.md')
        transformPath(relativePath);
        expect(consoleLogOutput).toContain('Path has been transformed into absolute');
        console.log = originalConsoleLog;
        // expect(absolutePath).toBe('/test/route');
        // jest.spyOn(path, 'resolve').mockImplementation((path) => {
        //   callback(null, mockFileContent)
        // })

    })
})