// doc file anh -> duong dan upload -> luu file .csv
var fs = require('fs');
const dateHelper = require('../date-helpers');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const nowObj = dateHelper.getNowObj();
const csvWriter = createCsvWriter({
    path: `./${nowObj.year}${nowObj.month}-${Date.now()}.csv`,
    header: [
        { id: 'Images', title: 'Images' },
    ],
});
const imagePaths = [];

let filenames = fs.readdirSync('images', function(err, files){
    console.log('Reading files...')
})
filenames.forEach(filename => {
    let new_name = filename.replace(/ /g, "-").replace(/,/g, "").replace(/\!/g, "");
    let image_path = `https://lotuscommunity.org.vn/wp-content/uploads/${nowObj.year}/${nowObj.month}/` + new_name; // TODO:change year, month
    if(new_name !== '.gitkeep'){
        const imagePathObj = {
            Images: image_path,
        }
        imagePaths.push(imagePathObj);
    }
});
console.log(imagePaths);
csvWriter.writeRecords(imagePaths).then(() => {
    console.log(`...Done - ${imagePaths.length} images`);
  })