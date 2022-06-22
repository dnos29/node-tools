const fs = require('fs')
const csv = require('csv-parser');
const { CLIENT_RENEG_WINDOW } = require('tls');
const rows = [];
fs.createReadStream(`./cc.csv`)
  .pipe(csv())
  .on('data', function (row) {
    console.log(row);
    rows.push(row);
})
.on('end', function () {
  console.log("...Writing...");
  fs.writeFileSync('./cc.json', JSON.stringify(rows));
    // csvWriter.writeRecords(books).then(() => {
    //   console.log(`...Done-${books.length} books`);
    // })
})
