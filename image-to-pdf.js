const pdfDoc = require('pdfkit');
const fs = require('fs');
const { forEach } = require('lodash');
const basePath = `/home/dnos/Documents/sefl/twd/by-axios/`;
const allFolders = [...Array(193).keys()].map(i => (i + 1 + ''));
const chunkAllFolders = [];
while(allFolders.length > 0){
  chunkAllFolders.push(allFolders.splice(0, 5));
}
// console.log(allFolders);
// let fileNames = [];
// for (batchFolder of allFolders) {
//   const folder = `${basePath}${batchFolder}`;
//   let files = fs.readdirSync(`${folder}`, (err, files) => {});
//   const filterFiles = files.filter(i => i !== 'hotcomic.net.txt').map(i => (`${folder}/${i}`));
//   fileNames = [...fileNames,...filterFiles];
// }
// console.log(fileNames);

const savePath = `./pdfs/`;

function fileNamesOfFolders(folders){
  let fileNames = [];
  for (folder of folders) {
    const folderName = `${basePath}${folder}`;
    let files = fs.readdirSync(`${folderName}`, (err, files) => {});
    const filterFiles = files.filter(i => i !== 'hotcomic.net.txt').map(i => (`${folderName}/${i}`));
    fileNames = [...fileNames,...filterFiles];
  }
  return fileNames;
}

function saveAsPdf(filePaths, fileName = 'output'){
  const doc = new pdfDoc();
  doc.pipe(fs.createWriteStream(`${savePath}${fileName}.pdf`));
  for(let [idx, filePath] of filePaths.entries()){
    const paddingTop = 0;
    const paddingLeft = 96;
    if(idx !== 0){
      doc.addPage();
    }
    doc.image(filePath, paddingLeft, paddingTop, {
      cover: [0, doc.page.height - (paddingTop * 2)],
      valign: 'center'
    });
  }
  doc.end();
}
chunkAllFolders.forEach(batchFolder => {
  const fileNames = fileNamesOfFolders(batchFolder);
  saveAsPdf(fileNames, batchFolder.join('-'));
})