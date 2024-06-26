const {normalizeURL, getURLsFromHTML} = require('./crawl.js');
const {test, expect} = require('@jest/globals');

test('normalizeURL strip protocol', () => {
    const input = 'https://BOOT.dev/path';
    const actual = normalizeURL(input);
    const expected = 'boot.dev/path';
    expect(actual).toEqual(expected);
});

test('normalizeURL strip /', () => {
    const input = 'https://BOOT.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'boot.dev/path';
    expect(actual).toEqual(expected);
});

test('getURLsFromHTML test', () => {
    const input = `
    <html>
        <body>
            <a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a>
        </body>
    </html>`;
    const actual = getURLsFromHTML(input);
    const expected = ['blog.boot.dev'];
    expect(actual).toEqual(expected);
});

test('getURLsFromHTML', () => {
    const input = `
    <html>
        <body>
            <a href="/path/"><span>Go to Boot.dev</span></a>
            <a href="http://blog.boot.dev/path/"><span>Go to Boot.dev</span></a>
            <a href="/api/"><span>Go to Boot.dev</span></a>
            <a href="https://boot.dev"><span>Go to Boot.dev</span></a>
        </body>
    </html>`;
    const input2 = 'https://blog.boot.dev';
    const actual = getURLsFromHTML(input, input2);
    const expected = ['blog.boot.dev/path', 'blog.boot.dev/path', 'blog.boot.dev/api', 'boot.dev'];
    expect(actual).toEqual(expected);
});

test('getURLsFromHTML', () => {
    const input = `
    <html>
        <body>
            <a href="invalid"><span>Go to Boot.dev</span></a>
        </body>
    </html>`;
    const input2 = 'https://blog.boot.dev';
    const actual = getURLsFromHTML(input, input2);
    const expected = [];
    expect(actual).toEqual(expected);
});