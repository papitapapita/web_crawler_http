const { JSDOM } = require('jsdom');

function normalizeURL(urlString){
    const urlObj = new URL(urlString) ;
    if(urlObj.pathname.slice(-1) == '/'){
        return `${urlObj.hostname}${urlObj.pathname.slice(0,-1)}`
    }
    return `${urlObj.hostname}${urlObj.pathname}`;
}

function getURLsFromHTML(htmlBody){
    const htmlObj = new JSDOM(htmlBody);
    console.log(htmlObj);
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
};