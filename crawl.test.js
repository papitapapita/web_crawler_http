const {normalizeURL} = require('./crawl.js');
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
