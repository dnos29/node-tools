const csv=require('csvtojson')
const csvFilePath='./source/books2.csv'
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})

const jsonArray = async () => {
    await csv().fromFile(csvFilePath);
}

jsonArray();