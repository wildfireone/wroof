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
    switch(linecounter){
        case "1":
            console.log("here");
            world = line.split(' ');
            r = world[0];
            c = world[1];
            drones = world[2];
            turns = world[3];
            maxpay = world[4];
            break;
        case 2:
            ptypes = line;
            break;
        case 3:
            productweights = line.split(' ');
            break;
        case 4:
            warehouses = new array(line);
            break;
    }

    if(debug) {
        //.log('Line from file:', line);
    }

});
if(debug){
    console.log("rows: "+r+" cols: "+c+" drones: "+drones+" turns: "+turns+" maxpayload: "+maxpay);
    console.log("ptypes: "+ptypes);
    console.log("productweights:"+productweights.length);
    console.log("warehouses:" +warehouses.length);
}

