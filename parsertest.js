/**
 * Created by Isaacs on 11/02/2016.
 */

var inputfile = process.argv.slice(2);
console.log(inputfile);
fs = require('fs')
fs.readFile(inputfile, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});

