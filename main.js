const {crawlPage} = require('./crawl.js');
const {printReport} = require('./report.js');

async function main(){
    try{
        if(process.argv.length < 3){
            throw Error('No website provided');
        }else if(process.argv.length > 3){
            throw Error('Too many arguments');
        }

        const baseURL = process.argv[2];

        console.log(`Starting crawl of: ${baseURL}`);
        const pages = await crawlPage(baseURL, baseURL, {});
        printReport(pages);
    }catch(err){
        console.error(`There was a problem: ${err.message}`);
        process.exit(1);
    }
}

main();
