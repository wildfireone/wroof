/**
 * Created by Isaacs on 11/02/2016.
 */
var Customer = require('./customer.js');
var Order = require('./order.js');
var Warehouse = require('./warehouse.js');
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
var orders =0;
var map;
lineReader.on('line', function (line) {
    lines.push(line.split(' '));
});


lineReader.on('close', function(){
    while(index<4){


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
        if(index== 2) {
            productweights = lines[2];
        }
        if(index == 3) {
            warehouses = new Array(parseInt(lines[3]));
        }
        index ++;
    }

    for(var i=0; i< warehouses.length; i++){

        var loc = lines[index++];
        var items = lines[index++];
        warehouses[i] = new Warehouse(items,loc);
    }
    index++;
    orders = new Array (parseInt(lines[index]));

    for(var i=0; i< orders.length; i++){
        var cust = new Customer(lines[index++]);
        console.log(cust);
        index++;
        var prod =  lines[index++];
        orders[i] = new Order(prod, cust);
    }

//if(line == null){
//   lr.close();
//}
    if(debug) {
        //.log('Line from file:', line);
    }
    if (debug) {
        var map = new Array(r);
        for (var i = 0; i < r; i++) {
            map[i] = new Array(parseInt(c));
        }
        console.log("rows: " + r + " cols: " + c + " drones: " + drones + " turns: " + turns + " maxpayload: " + maxpay);
        console.log("ptypes: " + ptypes);
        console.log("productweights:" + productweights.length);
        console.log("warehouses:" + warehouses.length);
        console.log("orders:" + orders.length);
        for(var i=0; i< orders.length;i++){
            console.log(orders[i]);
        }
        for(var i=0; i< warehouses.length;i++){
            console.log(warehouses[i]);
        }
        for (var i = 0; i < r; i++) {
            console.log(map[i]);

        }

    }

} );



