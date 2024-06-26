function main(){
    try{
        if(process.argv.length < 3){
            throw Error('No website provided');
        }else if(process.argv.length > 3){
            throw Error('Too many arguments');
        }

        console.log(`The website to crawl is ${process.argv[2]}`);
    }catch(err){
        console.error(`There was a problem: ${err.message}`);
        process.exit(1);
    }
}

main();
