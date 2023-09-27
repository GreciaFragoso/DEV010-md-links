const { transformToHTML } = require('../lib/transformToHTML');
const marked = require('marked');

describe('Transform to HTML', () => {
    it('Transform a MD file into HTML file', () => {
        const markdownContent = '# Heading\n\nThis is a paragraph.';
        const expectedHTML = '<h1>Heading</h1>\n<p>This is a paragraph.</p>\n';

        const result = transformToHTML(markdownContent);

        expect(result).toBe(expectedHTML);
        // const mdContent = 'Hola'
        // const HTMLContent = '<p>Hola</p>';

        // // jest.spyOn(marked, 'parse').mockResolvedValue(HTMLContent);
        // const result = transformToHTML(mdContent)
        
        // expect(result).toBe(HTMLContent);
    })
})