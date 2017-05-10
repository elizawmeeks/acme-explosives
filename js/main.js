"use strict";

// Initialize jquery for Materialize
$(document).ready(function() {
    $('select').material_select();
  });

console.log("hihi");

// Establish Global Variables
let catName = [];
let typeName = [];
let productName = [];
let cardString = "";

// Build Card Functions. yes they're big, yes they have to be here to get access to all the global variables. Please stop trying to move them.
let buildDynamiteCard = () => {
	console.log("buildCard");
	cardString = "";
	productName.forEach( (element) => {
		for (var title in element) {
			switch (element[title].id){
				case 0:
					break;
				case 1:
					switch (element[title].type){
						case 3:
							cardString += `
							  <div class="row">
							    <div class="col s12 m6 offset-m3">
							      <div class="card orange lighten-4">
							        <div class="card-content brown-text">
							          <span class="card-title">${element[title].name}</span>
							          <p>${element[title].description}</p>
							        </div>
							        <div class="card-action">
							          <a href="#">${typeName[3].name}</a>
							          <a href="#">${catName[1].name}</a>
							        </div>
							      </div>
							    </div>
							  </div>`;
							break;
						case 4:
							cardString += `
							  <div class="row">
							    <div class="col s12 m6 offset-m3">
							      <div class="card orange lighten-4">
							        <div class="card-content brown-text">
							          <span class="card-title">${element[title].name}</span>
							          <p>${element[title].description}</p>
							        </div>
							        <div class="card-action">
							          <a href="#">${typeName[4].name}</a>
							          <a href="#">${catName[1].name}</a>
							        </div>
							      </div>
							    </div>
							  </div>`;
							break;
						case 5:
							cardString += `
							  <div class="row">
							    <div class="col s12 m6 offset-m3">
							      <div class="card orange lighten-4">
							        <div class="card-content brown-text">
							          <span class="card-title">${element[title].name}</span>
							          <p>${element[title].description}</p>
							        </div>
							        <div class="card-action">
							          <a href="#">${typeName[5].name}</a>
							          <a href="#">${catName[1].name}</a>
							        </div>
							      </div>
							    </div>
							  </div>`;
							break;
					}
					break;
			}
		}
	});
	$("#stickItHere").html(cardString);
};

let buildFireworksCard = () => {
	console.log("buildCard");
	cardString = "";
	productName.forEach( (element) => {
		for (var title in element) {
			switch (element[title].id){
				case 0:
					switch (element[title].type){
						case 0:
							cardString += `
							  <div class="row">
							    <div class="col s12 m6 offset-m3">
							      <div class="card orange lighten-4">
							        <div class="card-content brown-text">
							          <span class="card-title">${element[title].name}</span>
							          <p>${element[title].description}</p>
							        </div>
							        <div class="card-action">
							          <a href="#">${typeName[0].name}</a>
							          <a href="#">${catName[0].name}</a>
							        </div>
							      </div>
							    </div>
							  </div>`;
							break;
						case 1:
							cardString += `
							  <div class="row">
							    <div class="col s12 m6 offset-m3">
							      <div class="card orange lighten-4">
							        <div class="card-content brown-text">
							          <span class="card-title">${element[title].name}</span>
							          <p>${element[title].description}</p>
							        </div>
							        <div class="card-action">
							          <a href="#">${typeName[1].name}</a>
							          <a href="#">${catName[0].name}</a>
							        </div>
							      </div>
							    </div>
							  </div>`;
							break;
						case 2:
							cardString += `
							  <div class="row">
							    <div class="col s12 m6 offset-m3">
							      <div class="card orange lighten-4">
							        <div class="card-content brown-text">
							          <span class="card-title">${element[title].name}</span>
							          <p>${element[title].description}</p>
							        </div>
							        <div class="card-action">
							          <a href="#">${typeName[2].name}</a>
							          <a href="#">${catName[0].name}</a>
							        </div>
							      </div>
							    </div>
							  </div>`;
							break;
						default:
							break;
					}
					break;
				case 1:
					break;
			}
		}
	});
	$("#stickItHere").html(cardString);
};

// Check the selection function
let checkSelection = () => {
	console.log("checkSelection");
	console.log($("select option:selected")[0].value);
	switch ( $("select option:selected")[0].value ){
		case "fireworks":
			console.log("Fireworks!");
			let seeFwData = Data.loadCategories()
			.then( (resolve) => {
				console.log("resolve", resolve);
				resolve.forEach( (element) => {
					catName.push(element);
				});
				console.log("catName", catName);
				// console.log("resolve0", resolve[0].name);
			})
			.then( 
				Data.loadTypes()
				.then( (resolve) => {
					resolve.forEach( (element) => {
						typeName.push(element);
					});
					console.log("typeName", typeName);
				})
			)
			.then(
				Data.loadProducts()
				.then( (resolve) => {
					resolve.forEach( (element) => {
						productName.push(element);
					});
					console.log("ProductName", productName);
					buildFireworksCard();
				})
			);
			break;
		case "demolition":
			let seeData = Data.loadCategories()
			.then( (resolve) => {
				console.log("resolve", resolve);
				resolve.forEach( (element) => {
					catName.push(element);
				});
				console.log("catName", catName);
				// console.log("resolve0", resolve[0].name);
			})
			.then( 
				Data.loadTypes()
				.then( (resolve) => {
					resolve.forEach( (element) => {
						typeName.push(element);
					});
					console.log("typeName", typeName);
				})
			)
			.then(
				Data.loadProducts()
				.then( (resolve) => {
					resolve.forEach( (element) => {
						productName.push(element);
					});
					console.log("ProductName", productName);
					buildDynamiteCard();
				})
			);
			console.log("demolition");
			break;
	}
};

// Event Listener on <select> element
$("select").change( checkSelection );