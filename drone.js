var drone = function(loc, maxWeight){

	this.loc = loc;

	this.order;

	this.maxWeight = maxWeight;

	this.currentWight = function(){
		return this.order.productsTotalWeight();
	}

	this.wightLeft = function(){
		return  this.maxWeight - this.order.productsTotalWeight();
	}

}