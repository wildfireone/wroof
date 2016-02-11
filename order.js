module.exports = function Order(productsArray, cust){
	
<<<<<<< HEAD
	this.customer = cust;
=======
	this.customer =cust;
>>>>>>> origin/master

	this.products = productsArray;

	this.productsTotalWeight = function(){
		var total = 0;
		for (var i = 0; i < this.products.length; i++) {
			total += this.products[i].weight; 
		};
		return total;
	}
}