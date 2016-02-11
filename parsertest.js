/**
 * Created by Isaacs on 11/02/2016.
 */

var inputfile = process.argv.slice(2)[0];
console.log("Input file: " +inputfile);

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(inputfile)
});

lineReader.on('line', function (line) {

    console.log('Line from file:', line);

});

