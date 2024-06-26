const { JSDOM } = require('jsdom');

function normalizeURL(urlString){
    try{
        const urlObj = new URL(urlString) ;
        if(urlObj.pathname.slice(-1) == '/'){
            return `${urlObj.hostname}${urlObj.pathname.slice(0,-1)}`
        }
        return `${urlObj.hostname}${urlObj.pathname}`;
    }catch(err){
        console.error(err.message);
    }
    
}

function getURLsFromHTML(htmlBody, baseURL){
    const htmlObj = new JSDOM(htmlBody);
    console.log(htmlObj.window.document.querySelectorAll('a'));
    const links = Array.from(htmlObj.window.document.querySelectorAll('a'));

    return links.map(link => {
        if(link.href.slice(0,1) === '/'){
            return normalizeURL(`${baseURL}${link.href}`);
        }else{
            return normalizeURL(link.href);
        }
    });
}

console.log(getURLsFromHTML(`
    <html>
        <body>
            <a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a>
        </body>
    </html>`));

module.exports = {
    normalizeURL,
    getURLsFromHTML
};