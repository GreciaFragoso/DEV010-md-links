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

jest.mock('path', () => ({
  resolve: jest.fn((usersPath) => `/fake/${usersPath}`),
}));

describe('TransformPath', () => {
    it('Should transform a route into absolute', () => {
        const relativePath = 'route/to/be/transformed';
        const result = transformPath(relativePath);

        expect(result).toBe('/fake/route/to/be/transformed');
    })
})