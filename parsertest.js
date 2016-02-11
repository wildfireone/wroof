/**
 * Created by Isaacs on 11/02/2016.
 */

    var debug = true;

var inputfile = process.argv.slice(2)[0];
console.log("Input file: " +inputfile);

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(inputfile)
});
var linecounter =0;
lineReader.on('line', function (line) {
    //1: rows cols drones turns maxpayload
    //2: product types
    //3: product weight
    //4: Howmany wearhouse
    linecounter++;
    if(linecounter==0) {
        var world = line.split(' ');
        var r = world[0];
        var c = world[1];
        var drones = world[2];
        var turns = world[3];
        var maxpay = world[4];

        if(debug){
            console.log("rows: "+r+" cols: "+c+" drones: "+drones+" turns: "+turns+" maxpayload: "+maxpay);
        }

    }


    console.log('Line from file:', line);

});

