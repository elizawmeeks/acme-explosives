"use strict";

console.log("hihi productspromise");

var Data = (function(originalData){
	let productArray = [];

	originalData.sortProducts = (data) => {
		data.products.forEach ( (element) => {
			productArray.push(element);
		});
		// console.log("productArray", productArray);
	};

	originalData.loadProducts = () => {
		return new Promise( (resolve, reject) => {
			let request = new XMLHttpRequest();
			request.onload = function(){
				if (request.status === 200){
					var data = JSON.parse(request.responseText);
					originalData.sortProducts(data);
					resolve(productArray);
				} else{
					// something went wrong :(
					reject(new Error("XMLHttpRequest Error ", request.statusText));
				}
			};
			request.open("GET", "json/products.json");
			request.send();
		});
	};

	return originalData;

})(Data || {});