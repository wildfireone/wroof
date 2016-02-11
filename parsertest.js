/**
 * Created by Isaacs on 11/02/2016.
 */

    var debug = true;

var inputfile = process.argv.slice(2)[0];
console.log("Input file: " +inputfile);

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(inputfile)
});

var world, r, c, drones, turns, maxpay;
var ptypes;
var productweights;
var warehouses;
var linecounter =0;
lineReader.on('line', function (line) {
    //1: rows cols drones turns maxpayload
    //2: product types
    //3: product weight
    //4: Howmany wearhouse
    linecounter++;
    if(linecounter == 1) {

        console.log("here");
        world = line.split(' ');
        r = world[0];
        c = world[1];
        drones = world[2];
        turns = world[3];
        maxpay = world[4];
    }
    if(linecounter == 2) {
        ptypes = line;
    }
    if(linecounter == 3) {
        productweights = line.split(' ');
    }
    if(linecounter == 4) {
        warehouses = new Array(line);
    }
    if(line == null){
        lr.close();
    }
    if(debug) {
        //.log('Line from file:', line);
    }

});

lineReader.on('end', function () {
    if (debug) {
        console.log("rows: " + r + " cols: " + c + " drones: " + drones + " turns: " + turns + " maxpayload: " + maxpay);
        console.log("ptypes: " + ptypes);
        console.log("productweights:" + productweights.length);
        console.log("warehouses:" + warehouses.length);
    }
});


