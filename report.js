function sortPages(pages){
    const pagesArr = Object.entries(pages);
    pagesArr.sort((a,b) => {
        aHits = a[1];
        bHits = b[1];
        return b[1] - a[1];
    })

    return pagesArr;
}

function printReport(pages){
    console.log(`
    ===========
    REPORT
    ===========`);
    const sortedPages = sortPages(pages);
    for (const sortedPage of sortedPages) {
        console.log(`Found ${sortedPage[1]} links to page: ${sortedPage[0]}`);
    }
}

module.exports = {
    printReport
};