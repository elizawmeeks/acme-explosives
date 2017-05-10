"use strict";

console.log("hihi catpromise");

var Data = (function(originalData){
	let catArray = [];

	originalData.sortCategories = (data) => {
		data.categories.forEach ( (element) => {
			catArray.push(element);
		});
		// console.log("catArray", catArray);
	};

	originalData.loadCategories = () => {
		return new Promise( (resolve, reject) => {
			let request = new XMLHttpRequest();
			request.onload = function(){
				if (request.status === 200){
					var data = JSON.parse(request.responseText);
					originalData.sortCategories(data);
					resolve(catArray);
				} else{
					// something went wrong :(
					reject(new Error("XMLHttpRequest Error ", request.statusText));
				}
			};
			request.open("GET", "json/categories.json");
			request.send();
		});
	};

	return originalData;

})(Data || {});