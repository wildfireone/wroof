/**
 *test machine for drone code
 */
var deliverArray =[];
var popList = [];
//Start off with all drones at warehouse 1
for(var curWar = 0; curWar < warehouses.length; cuWar++){
	for(var ords = 0; ords < orders.length; ords++){
		//go through each item in order, if all items are in warehouse, this order can be done
		var canOrder = true;
		for (var it = 0; it < orders[ords].products.length){
			if (itemInWarehouse(ordItem, warehouse[curWar].items) != true){
				canOrder = false;
			}
		}
		if (canOrder == true){
			//add order to deliver arrray
			deliverArray.push(orders[ords]);
			//remove item from warehous
			for (var i = 0; i < orders[ords].products.length; i++){
				warehouses.pop(warehouses[curWar].indexOf(orders[ords].products[i]));
			}
			//copy order index
			popList.push(indexOf(orders[ords]));
		}
	}
	for(var i = 0; i < popList.length; i++){
		orders.pop(popList[i]);
	}
	
}

function itemInWarehouse(value, array) {
	return array.indexOf(value) > -1;
}