const outputDiv = document.getElementById("outputDiv");

function printToDOM (){
	let data = JSON.parse(this.responseText);
	let ops = ""; //outputstring
	let dogBrands = data.dog_brands;
	let catBrands = data.cat_brands;
	for (let i = 0; i < dogBrands.length; i++) {
		ops += `<div class="col-sm-6 col-md-4 food"><div class="caption">`
		let currBrand = dogBrands[i];
		ops += `<h2>${currBrand.name}</h2>`
		for (let j = 0; j < currBrand.types.length; j++) {
			let currType = currBrand.types[j];
			ops += `<h4>${currType.type}</h4>`;
			for (let k = 0; k < currType.volumes.length; k++) {
				let currVolume = currType.volumes[k];
				ops += `<p>${currVolume.name}: $${currVolume.price}</p>`;
			}

		}
		ops += `</div></div>`
	}
	for (let i = 0; i < catBrands.length; i++) {
		ops += `<div class="col-sm-6 col-md-4 food"><div class="caption">`
		let currBrand = catBrands[i];
		ops += `<h2>${currBrand.name}</h2>`
		ops += `<p>For breeds such as: ${currBrand.breeds}</p>`
		for (let j = 0; j < currBrand.types.length; j++) {
			let currType = currBrand.types[j];
			ops += `<h4>${currType.type}</h4>`;
			for (let k = 0; k < currType.volumes.length; k++) {
				let currVolume = currType.volumes[k];
				ops += `<p>${currVolume.name}: $${currVolume.price}</p>`;
			}

		}
		ops += `</div></div>`
	}
	outputDiv.innerHTML = ops;
}

var dataReq = new XMLHttpRequest();
dataReq.addEventListener("load", printToDOM);
dataReq.addEventListener("error", function(){console.log("JSON Error");});
dataReq.open("GET", "petfood.json");
dataReq.send();
