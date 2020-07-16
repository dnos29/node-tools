const fs = require('fs');
const _ = require('lodash');
var sizeOf = require('image-size');


var image_names = [];
var list_with = [];
var list_height = [];
var path_photos = './photos/'
fs.readdirSync(path_photos).forEach(file => {
    image_names.push(path_photos + file );
})

image_names.forEach(image => {
    if(image != (path_photos + 'z1.png')){
        var dimensions = sizeOf(image);
        list_with.push(dimensions.width);
        list_height.push(dimensions.height);
    }
});
console.log('---min width---');
console.log(list_with.length + '. ' +  _.max(list_with) + ' - ' + _.min(list_with) + '= ' + (_.max(list_with) - _.min(list_with)));
console.log('---min height---');
console.log(list_height.length + '. ' +_.max(list_height) + ' - ' + _.min(list_height) + '= ' + (_.max(list_height) - _.min(list_height)));


