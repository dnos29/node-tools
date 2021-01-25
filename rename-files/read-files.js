var fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: `./022021-${Date.now()}.csv`,
    header: [
        { id: 'Images', title: 'Images' },
    ],
});
const books = [];

let filenames = fs.readdirSync('images', function(err, files){
    
})
// console.log(filenames)
filenames.forEach(filename => {
    let new_name = filename.replace(/ /g, "-").replace(/,/g, "");
    // console.log(`${new_name}`);
    if(new_name !== '.gitkeep'){
        const book = {
            Images: new_name,
        }
        books.push(book);
    }
});
console.log(books);
csvWriter.writeRecords(books).then(() => {
    console.log("...Done");
  })