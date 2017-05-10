"use strict";

console.log("hihi typespromise");

var Data = (function(originalData){
	let typeArray = [];

	originalData.sortTypes = (data) => {
		data.types.forEach ( (element) => {
			typeArray.push(element);
		});
		// console.log("typeArray", typeArray);
	};

	originalData.loadTypes = () => {
		return new Promise( (resolve, reject) => {
			let request = new XMLHttpRequest();
			request.onload = function(){
				if (request.status === 200){
					var data = JSON.parse(request.responseText);
					originalData.sortTypes(data);
					resolve(typeArray);
				} else{
					// something went wrong :(
					reject(new Error("XMLHttpRequest Error ", request.statusText));
				}
			};
			request.open("GET", "json/types.json");
			request.send();
		});
	};

	return originalData;

})(Data || {});