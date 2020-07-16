var fs = require('fs');

// fs.rename('images/A thousand tiny explosions (1).jpg', 'images/A_thousand_tiny_explosions_(1).jpg', function(err, rs){
//     if(err) throw err;
//     console.log(rs);
// })

let filenames = fs.readdirSync('images', function(err, files){
    
})
// console.log(filenames)
filenames.forEach(filename => {
    let new_name = filename.replace(/ /g, "-");
    console.log(`images/${filename}`);

    fs.rename(`images/${filename}`, `images/${new_name}`, function(err, rs){
        if(err) throw err;
        console.log(rs);
    })
});

// fs.rename('sample.txt', 'sample_old.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed.');
//   });