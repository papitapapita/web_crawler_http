function normalizeURL(urlString){
    const urlObj = new URL(urlString) ;
    if(urlObj.pathname.slice(-1) == '/'){
        return `${urlObj.hostname}${urlObj.pathname.slice(0,-1)}`
    }
    return `${urlObj.hostname}${urlObj.pathname}`;
}

function getURLsFromHTML(){

}

module.exports = {
    normalizeURL,
    getURLsFromHTML
};