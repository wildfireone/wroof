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
var lines = new Array();
var index =0;
lineReader.on('line', function (line) {
    lines.push(line.split(' '));
});


lineReader.on('close', function(){
    while(index<lines.length){


        //1: rows cols drones turns maxpayload
        //2: product types
        //3: product weight
        //4: Howmany wearhouse

        if(index == 0) {

            console.log("here");
            world = lines[0];
            r = world[0];
            c = world[1];
            drones = world[2];
            turns = world[3];
            maxpay = world[4];
        }
        if(index == 1) {
            ptypes = lines[1];
        }
        if(linecounter == 2) {
            productweights = lines[2];
        }
        if(linecounter == 3) {
            warehouses = new Array(parseInt(lines[3]));
        }

        index ++;


    }

//if(line == null){
//   lr.close();
//}
    if(debug) {
        //.log('Line from file:', line);
    }
    if (debug) {
        console.log("rows: " + r + " cols: " + c + " drones: " + drones + " turns: " + turns + " maxpayload: " + maxpay);
        console.log("ptypes: " + ptypes);
        console.log("productweights:" + productweights.length);
        console.log("warehouses:" + warehouses.length);
    }

} );



