var order = function(productsArray, cust){
	
	this.customer;

	this.products = productsArray;

	
	this.productsTotalWeight = function(){
		var total = 0;
		for (var i = 0; i < this.products.length; i++) {
			this.products[i].weight; 
		};
		return total;
	}
}